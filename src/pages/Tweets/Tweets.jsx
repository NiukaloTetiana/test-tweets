import { useEffect, useState } from 'react';

import { GoBack } from 'components/GoBack/GoBack';
import { Loader } from 'components/Loader/Loader';
import { UsersList } from 'components/UsersList/UsersList';
import { getUsers } from 'services/users';
import { LoadMore } from 'components/LoadMore/LoadMore';
// import { LoadMore } from '../../components/LoadMore/LoadMore';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then(setUsers)

      .finally(() => setIsLoading(false));
  }, []);

  const handleLoadMore = () => {
    setShowLoadMore(prevState => ({
      page: prevState.page + 1,
    }));
  };

  return (
    <>
      <GoBack />
      {users.length > 0 && <UsersList users={users} />}
      {isLoading && <Loader />}
      {showLoadMore && <LoadMore onClick={handleLoadMore} />}
    </>
  );
};

export default Tweets;

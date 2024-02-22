import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GoBack } from 'components/GoBack/GoBack';
import { Loader } from 'components/Loader/Loader';
import { UsersList } from 'components/UsersList/UsersList';
import { LoadMoreButton } from '../../components/LoadMoreButton/LoadMoreButton';
import { selectError, selectIsLoading } from '../../redux/selectors';
import NotFound from 'pages/NotFound/NotFound';
import { fetchUsers } from '../../redux/operations';
import { ContainerButton } from './Tweets.styled';

const Tweets = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers(currentPage));
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <GoBack />
      {loading && <Loader />}
      {error && <NotFound />}
      <UsersList />

      <ContainerButton>
        <LoadMoreButton onClick={handleLoadMore} />
      </ContainerButton>
    </>
  );
};

export default Tweets;

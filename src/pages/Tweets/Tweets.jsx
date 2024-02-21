import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GoBack } from 'components/GoBack/GoBack';
import { Loader } from 'components/Loader/Loader';
import { UsersList } from 'components/UsersList/UsersList';
// import { LoadMoreButton } from 'components/LoadMore/LoadMore';
import { selectError, selectIsLoading } from '../../redux/selectors';
import NotFound from 'pages/NotFound/NotFound';
import { fetchUsers } from '../../redux/operations';

const Tweets = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // const handleLoadMore = () => {
  //   setShowLoadMore(prevState => ({
  //     page: prevState.page + 1,
  //   }));
  // };

  return (
    <>
      <GoBack />
      {loading && <Loader />}
      {error && <NotFound />}
      <UsersList />
      {/* {showLoadMore && <LoadMoreButton onClick={handleLoadMore} />} */}
    </>
  );
};

export default Tweets;

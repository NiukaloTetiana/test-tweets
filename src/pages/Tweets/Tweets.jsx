import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { selectError, selectIsLoading } from '../../redux/selectors';
import { fetchUsers } from '../../redux/operations';
import { GoBack } from 'components';
import { Loader } from 'components';
import { UsersList } from 'components';
import { LoadMoreButton } from 'components';
import { Error } from 'components';
import { Filter } from 'components';
import { Container, ContainerButton } from './Tweets.styled';

const Tweets = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);

  const handleLoadMore = () => {
    dispatch(fetchUsers(currentPage + 1))
      .unwrap()
      .then(data => {
        if (data.length < 3) {
          toast.info('You have reached the end of tweets.');
          setHasMoreData(false);
        } else {
          setCurrentPage(prevPage => prevPage + 1);
        }
      })
      .catch(error => {
        toast.warning(error);
      });
  };

  return (
    <>
      <Container>
        <GoBack />
        <Filter />
      </Container>

      {loading && <Loader />}
      {error && <Error />}
      {<UsersList />}

      {!loading && hasMoreData && (
        <ContainerButton>
          <LoadMoreButton onClick={handleLoadMore} />
        </ContainerButton>
      )}
    </>
  );
};

export default Tweets;

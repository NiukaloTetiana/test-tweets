import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GoBack } from 'components/GoBack/GoBack';
import { Loader } from 'components/Loader/Loader';
import { UsersList } from 'components/UsersList/UsersList';
import { LoadMoreButton } from '../../components/LoadMoreButton/LoadMoreButton';
import {
  selectError,
  selectIsLoading,
  selectUsers,
} from '../../redux/selectors';
import NotFound from 'pages/NotFound/NotFound';
import { Filter } from '../../components/Filter/Filter';
import { Container, ContainerButton } from './Tweets.styled';
import { fetchUsers } from '../../redux/operations';
import { toast } from 'react-toastify';

const Tweets = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const users = useSelector(selectUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('show all');

  const handleLoadMore = () => {
    dispatch(fetchUsers(currentPage + 1, selectedFilter))
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

  const handleFilterSelect = filter => {
    setSelectedFilter(filter);
    setCurrentPage(1);
    setHasMoreData(true);
    dispatch(fetchUsers({ page: 1, filter }));
  };

  return (
    <>
      <Container>
        <GoBack />
        <Filter onSelectFilter={handleFilterSelect} />
      </Container>

      {loading && <Loader />}
      {error && <NotFound />}
      {<UsersList users={users} />}

      {!loading && hasMoreData && (
        <ContainerButton>
          <LoadMoreButton onClick={handleLoadMore} />
        </ContainerButton>
      )}
    </>
  );
};

export default Tweets;

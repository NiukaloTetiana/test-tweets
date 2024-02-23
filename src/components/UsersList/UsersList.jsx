import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { UserItem } from '../UserItem/UserItem';
import { List } from './UsersList.styled';
import { selectFilter, selectUsers } from '../../redux/selectors';
import { fetchUsers } from '../../redux/operations';
import { getFilteredUsers } from '../../helpers/getFilteredUsers';
// import { filterUsers } from '../../redux/filterSlice';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const filter = useSelector(selectFilter);
  const [followersCount, setFollowersCount] = useLocalStorage('following', []);

  const handleFollowClick = id => {
    if (followersCount.some(item => item === id)) {
      setFollowersCount(followersCount.filter(item => item !== id));
    } else {
      setFollowersCount([...followersCount, id]);
    }
  };

  useEffect(() => {
    dispatch(fetchUsers(1));
  }, [dispatch]);

  const filteredUsers = getFilteredUsers(users, filter, followersCount);

  return (
    <List>
      {filteredUsers.map(user => (
        <UserItem
          key={user.id}
          {...user}
          handleFollowClick={handleFollowClick}
          followersCount={followersCount}
        />
      ))}
    </List>
  );
};

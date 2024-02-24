import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectFilter, selectUsers } from '../../redux/selectors';
import { fetchUsers } from '../../redux/operations';
import { getFilteredUsers } from 'helpers';
import { useLocalStorage } from 'hooks';
import { UserItem } from 'components';

import { List } from './UsersList.styled';

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

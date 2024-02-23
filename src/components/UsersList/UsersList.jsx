import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { UserItem } from '../UserItem/UserItem';
import { List } from './UsersList.styled';
import { selectFilter, selectUsers } from '../../redux/selectors';
import { fetchUsers } from '../../redux/operations';

export const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchUsers(1));
  }, [dispatch]);

  const getFilteredUsers = () => {
    switch (filter) {
      case 'show all':
        return users;
      case 'follow':
        return users.filter(user => user.following);
      case 'following':
        return users.filter(user => !user.follow);
      default:
        return users;
    }
  };

  const filteredUsers = getFilteredUsers(users, filter);

  return (
    <List>
      {filteredUsers.map(user => (
        <UserItem key={user.id} {...user} />
      ))}
    </List>
  );
};

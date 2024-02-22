import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { UserItem } from '../UserItem/UserItem';
import { List } from './UsersList.styled';
import { selectUsers } from '../../redux/selectors';
import { fetchUsers } from '../../redux/operations';

export const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers(1));
  }, [dispatch]);

  return (
    <List>
      {users.map(user => (
        <UserItem key={user.id} {...user} />
      ))}
    </List>
  );
};

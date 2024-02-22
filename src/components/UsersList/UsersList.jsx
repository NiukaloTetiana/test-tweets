import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { UserItem } from '../UserItem/UserItem';
import { List } from './UsersList.styled';
import { selectUsers } from '../../redux/selectors';
import { fetchUsers } from '../../redux/operations';

export const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers(1))
      .unwrap()
      .then(data => {
        if (data.length < 3) {
          toast.info('You have reached the end of tweets.');
        }
      })
      .catch(error => {
        if (error !== null) {
          toast.warning(error);
        }
      });
  }, [dispatch]);

  return (
    <List>
      {users.map(user => (
        <UserItem key={user.id} {...user} />
      ))}
    </List>
  );
};

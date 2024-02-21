// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { UserItem } from '../UserItem/UserItem';
import { List } from './UsersList.styled';
import { selectUsers } from '../../redux/selectors';

export const UsersList = () => {
  const users = useSelector(selectUsers);

  return (
    <List>
      {users.map(user => (
        <UserItem key={user.id} {...user} />
      ))}
    </List>
  );
};

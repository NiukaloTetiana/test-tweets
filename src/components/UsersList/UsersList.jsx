import { UserItem } from '../UserItem/UserItem';
import { List } from './UsersList.styled';

export const UsersList = ({ users }) => {
  return (
    <List>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </List>
  );
};

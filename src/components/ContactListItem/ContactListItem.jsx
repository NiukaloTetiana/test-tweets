import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
} from './ContactListItem.styled';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId));
  };

  return (
    <ContactItem key={id}>
      <ContactName>
        {name}:<ContactNumber>{number}</ContactNumber>
      </ContactName>
      <Button type="button" onClick={() => handleDeleteContact(id)}>
        Delete
      </Button>
    </ContactItem>
  );
};

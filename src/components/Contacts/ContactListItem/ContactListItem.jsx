import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
} from '../ContactListItem/ContactListItem.styled';

export const ContactsListItem = ({ id, name, number, deleteContact }) => {
  return (
    <ContactItem key={id}>
      <ContactName>
        {name}:<ContactNumber>{number}</ContactNumber>
      </ContactName>
      <Button onClick={() => deleteContact(id)}>Delete</Button>
    </ContactItem>
  );
};

import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { ContactsListItem } from '../ContactListItem/ContactListItem';
import { ContactsList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => (
        <ContactsListItem key={id} id={id} name={name} number={number} />
      ))}
    </ContactsList>
  );
};

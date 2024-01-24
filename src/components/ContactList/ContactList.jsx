import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { ContactsListItem } from '../ContactListItem/ContactListItem';
import { ContactsList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ContactsList>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactsListItem key={id} id={id} name={name} number={number} />
      ))}
    </ContactsList>
  );
};

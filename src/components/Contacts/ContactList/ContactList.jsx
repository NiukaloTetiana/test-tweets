import { ContactsListItem } from '../ContactListItem/ContactListItem';

import { ContactsList } from '../ContactList/ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => (
        <ContactsListItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ContactsList>
  );
};

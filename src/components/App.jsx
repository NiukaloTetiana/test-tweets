import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contacts/ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };

    const isExist = contacts.find(
      item => item.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isExist) {
      Notify.failure(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, newContact]);
  };

  const deleteContact = userId => {
    setContacts(prev => prev.filter(contact => contact.id !== userId));
  };

  const handleChangeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const getFilterContacts = () => {
    return contacts.filter(
      item =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.number.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContact = getFilterContacts();

  return (
    <>
      <Section title="Phonebook">
        <ContactForm addContact={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} handleChangeFilter={handleChangeFilter} />
        <ContactList contacts={filteredContact} deleteContact={deleteContact} />
      </Section>
    </>
  );
};

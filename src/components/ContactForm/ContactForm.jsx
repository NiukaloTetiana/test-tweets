import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';
import { nanoid } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Form, Input, Label, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const findContactByName = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );

  const findContactNumder = contacts.find(
    contact => contact.number.toLowerCase() === number.toLowerCase()
  );

  const handleSubmit = event => {
    event.preventDefault();

    if (findContactByName) {
      Notify.info(`${name} is already in contacts.`);
      return;
    }

    if (findContactNumder) {
      Notify.info(`${number} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[A-Z][a-z]+ [A-Z][a-z]+$"
          title="Rosie Mango"
          id={nanoid()}
          value={name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?[0-9\s\-\(\)]+"
          title="456-78-90"
          id={nanoid()}
          value={number}
          onChange={handleChange}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

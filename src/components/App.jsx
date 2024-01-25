import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../redux/selectors';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {loading && <Loader />}
        {error && <Error />}
        <ContactList />
      </Section>
    </>
  );
};

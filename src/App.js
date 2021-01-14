import ContactForm from './components/ContactForm/contactForm';
import ContactList from './components/ContactList/contactList';
import Filter from './components/Filter/filter';
import './app.css';

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}

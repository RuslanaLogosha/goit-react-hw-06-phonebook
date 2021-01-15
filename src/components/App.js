import ContactForm from './ContactForm/contactForm';
import ContactList from './ContactList/contactList';
import Filter from './Filter/filter';

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

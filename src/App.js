import { useState, useEffect } from 'react';
import shortid from 'shortid';

import ContactForm from './components/ContactForm/contactForm';
import ContactList from './components/ContactList/contactList';
import Filter from './components/Filter/filter';
import './app.css';

// const initialContacts = [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ]

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (name === '') {
      alert(`Введите, пожалуйста, имя контакта.`);
      return;
    }

    if (number === '') {
      alert(`Введите, пожалуйста, номер телефона контакта.`);
      return;
    }

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </>
  );
}

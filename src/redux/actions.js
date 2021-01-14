import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const changeFilter = createAction('contacts/changeFilter');
const deleteContact = createAction('contacts/delete');

const contactsActions = { addContact, deleteContact, changeFilter };
export default contactsActions;

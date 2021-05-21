// import actionTypes from "./contacts-types";
import { createAction } from '@reduxjs/toolkit';

// const addContact = createAction("form/Add_contact", ({ id, name, number }) => ({
//   payload: { id, name, number },
// }));

const addContactRequest = createAction('form/Add_contactRequest');
const addContactSuccess = createAction('form/Add_contactSuccess');
const addContactError = createAction('form/Add_contactError');

const deleteContactRequest = createAction('contactList/Delete_contactRequest');
const deleteContactSuccess = createAction('contactList/Delete_contactSuccess');
const deleteContactError = createAction('contactList/Delete_contactError');

const fetchContactRequest = createAction('contactList/fetch_contactRequest');
const fetchContactSuccess = createAction('contactList/fetch_contactSuccess');
const fetchContactError = createAction('contactList/fetch_contactError');

const filterChange = createAction('findInput/Filter_change');

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  filterChange,
};

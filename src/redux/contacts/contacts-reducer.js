import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import actionTypes from "../contacts/contacts-types";
import actions from './contacts-action';

const {
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
} = actions;

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) => {
    const newArr = state.filter(elem => elem.id !== payload);
    // console.log("action delete:", newArr);
    return [...newArr];
  },
});

const filter = createReducer('', {
  [filterChange]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});

const error = createReducer(null, {
  [addContactSuccess]: () => null,
  [deleteContactSuccess]: () => null,
  [fetchContactSuccess]: () => null,
  [addContactError]: (state, { payload }) => payload,
  [deleteContactError]: (state, { payload }) => payload,
  [fetchContactError]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});

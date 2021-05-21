import { createSelector } from '@reduxjs/toolkit';

const getLoadingContacts = state => state.contacts.loading;

const getError = state => state.contacts.error;

const getContactsItems = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

// const getVisibleContacts = state => {
//   const filter = getFilter(state);
//   const items = getContactsItems(state);
//   const normalizedfilter = filter.toLowerCase();
//   return items.filter(({ name }) => {
//     return name.toLowerCase().includes(normalizedfilter);
//   });
// };

const getVisibleContacts = createSelector(
  [getContactsItems, getFilter],
  (items, filter) => {
    const normalizedfilter = filter.toLowerCase();
    return items.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedfilter);
    });
  },
);

export default {
  getLoadingContacts,
  getError,
  getContactsItems,
  getFilter,
  getVisibleContacts,
};

import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectFilter = state => state.filters.name;
export default filtersSlice.reducer;

// export const selectContact = state => state.contacts;

// const filterContacts = (contacts, filter) => {
//   return contacts.items.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.name.toLowerCase())
//   );
// };

// export const filteredContacts = createSelector(
//   [selectContact, selectFilter],
//   (contacts, filter) => filterContacts(contacts, filter)
// );
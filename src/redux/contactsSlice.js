import { createSlice } from '@reduxjs/toolkit';
import userContacts from '../userContacts.json';
import { nanoid } from 'nanoid';

const initialState = {
  items: userContacts,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items = [...state.items, action.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = state => state.contacts;
export default contactsSlice.reducer;
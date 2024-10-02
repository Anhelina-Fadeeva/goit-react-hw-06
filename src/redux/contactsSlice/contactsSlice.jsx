import { createSlice, createSelector } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  items: []
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContact = {
        id: uuidv4(),
        ...action.payload
      };
      state.items.push(newContact);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    }
  }
});

// Селекторы
export const selectContacts = createSelector(
  state => state.contacts.items,
  items => items
);

// Экспорт действий и редюсера
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;

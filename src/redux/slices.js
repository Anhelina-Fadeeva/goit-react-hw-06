import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice/contactsSlice';
import filtersReducer from './filtersSlice/filtersSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer, // редюсер для контактов
  filters: filtersReducer,   // редюсер для фильтрации
});

export default rootReducer;

import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { addContact, deleteContact, selectContacts } from './redux/contactsSlice/contactsSlice';
import { setSearchTerm, selectSearchTerm } from './redux/filtersSlice/filtersSlice';

function App() {
  const dispatch = useDispatch();
  const userContacts = useSelector(selectContacts);
  const searchUser = useSelector(selectSearchTerm);

  const filteredContacts = userContacts.filter(item =>
    item.name && item.name.toLowerCase().includes(searchUser.toLowerCase())
  );

  const handleSubmit = values => {
    dispatch(addContact(values));
  };

  const handleDeleteContactUser = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <h1 className="pageTitle">Contact Book</h1>
      <ContactForm addContact={handleSubmit} contacts={userContacts} />
      <SearchBox setSearchUser={term => dispatch(setSearchTerm(term))} />
      <ContactList
        userContacts={filteredContacts}
        handleDeleteContactUser={handleDeleteContactUser}
      />
    </>
  );
}

export default App;

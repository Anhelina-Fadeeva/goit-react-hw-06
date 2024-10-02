import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice/contactsSlice';
import s from './ContactList.module.css';

function ContactList({ userContacts }) {
  const dispatch = useDispatch();

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete contact ${name}?`)) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <ul className={s.contactList}>
      {userContacts.map(contact => (
        <li key={contact.id} className={s.contactItem}>
          <span className={s.contactName}>{contact.name}:</span>
          <span className={s.contactNumber}>{contact.number}</span>
          <button
            className={s.deleteBtn}
            onClick={() => handleDelete(contact.id, contact.name)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  userContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;


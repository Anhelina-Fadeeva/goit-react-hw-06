import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <FaUser className={styles.icon} />
        <span className={styles.contactName}>{name}</span>
      </div>

      <div className={styles.contactInfo}>
        <FaPhone className={styles.icon} />
        <span className={styles.contactNumber}>{number}</span>
      </div>

      <button type="button" className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name.toLowerCase());
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={styles.contactList}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <li className={styles.contactItem} key={contact.id}>
            <Contact id={contact.id} name={contact.name} number={contact.number} />
          </li>
        ))
      ) : (
        <li className={styles.noContacts}>No contacts found</li>
      )}
    </ul>
  );
}

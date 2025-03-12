import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={css.contactList} >
      {contacts.map(({ id, name, number }) => (
        <li key={id} >
          <Contact
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

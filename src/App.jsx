import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import Contact from "./components/Contact/Contact";
import Contacts from "./assets/list";
import { nanoid } from "nanoid";
import "./App.css";
import { useState, useEffect } from "react";
import { Formik, Form, FieldArray } from "formik";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [filter, setFilter] = useState("");
  const [filteredArray, setFilteredArray] = useState(Contacts);
  const [contacts, setContacts] = useState(Contacts);

  const dataContacts = JSON.parse(localStorage.getItem("contacts"));

  useEffect(() => {
    setFilteredArray((_) => {
      return filter;
    });
  }, [filter]);

  useEffect(() => {
    if (dataContacts !== null) setContacts(dataContacts);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function filterHandle(e) {
    setFilter(e.target.value.toLowerCase());
  }
  const handleAdd = (values) => {
    setContacts([
      ...contacts,
      { id: nanoid(), name: values.name, number: values.number },
    ]);
  };
  const handleDelete = (e) => {

    setContacts(contacts.filter((c) => c.id !== e.target.id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAdd} />
      <SearchBox filter={filter} onFilter={filterHandle} />
      
      <Formik initialValues={filteredArray}>
        <Form className="form">
          {contacts
            .filter((c) => c.name.toLowerCase().includes(filter))
            .map(({ id, name, number}) => (
              <Contact
                key={id}
                name={name}
                number={number}
                onDelete={handleDelete}
                id={id}
              />
            ))}
        </Form>
      </Formik>
    </div>
  );
}

export default App;

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import defaultContact from "./assets/defaultContact.json";
import { useEffect, useState } from "react";

const App = () => {
  const [contactItems, setContactItems] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contactItems"));

    return savedContacts && savedContacts.length !== 0
      ? savedContacts
      : defaultContact;
  });

  const [filterContact, setFilterContact] = useState("");

  useEffect(() => {
    localStorage.setItem("contactItems", JSON.stringify(contactItems));
  }, [contactItems]);

  const filterAllContact = contactItems.filter((contactItem) => {
    return contactItem.name
      .toLocaleLowerCase()
      .includes(filterContact.trim().toLocaleLowerCase());
  });

  const addNewContact = (newContact) => {
    setContactItems((prewContactItems) => [...prewContactItems, newContact]);
  };

  const deleteOldContact = (id) => {
    setContactItems((prewContactItems) =>
      prewContactItems.filter((contactItem) => contactItem.id !== id)
    );
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} />
      <SearchBox onFilter={setFilterContact} filter={filterContact} />
      <ContactList contacts={filterAllContact} onDelete={deleteOldContact} />
    </div>
  );
};

export default App;

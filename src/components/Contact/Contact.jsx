import s from "./Contact.module.css";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={s.containerContact}>
      <div>
        <p>
          <GrUserManager /> {contact.name}
        </p>
        <p>
          <MdOutlinePhoneAndroid /> {contact.number}
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          onDelete(contact.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;

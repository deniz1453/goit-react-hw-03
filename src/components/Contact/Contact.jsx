
import Person from "../Icons/Person/Person";
import Phone from "../Icons/Phone/Phone";
import ContactCss from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={`${ContactCss.ulListStyle}`} key={id}>
      {
        
          <div className={`${ContactCss.form}`}>
            <div className={`${ContactCss.card}`}>
              <div className={`${ContactCss.person}`}>
                <Person/>
                <p>{name}</p>
              </div>
              <div className={`${ContactCss.phone}`}>
                <Phone />
                <p>{number}</p>
              </div>
              <div className={`${ContactCss.divBtn}`}>
              <button type="button" className={`${ContactCss.btnDelete}`} onClick={onDelete} id={id}>Delete</button>
              </div>
            </div>
          </div>
        
      }
    </li>
  );
};

export default Contact;

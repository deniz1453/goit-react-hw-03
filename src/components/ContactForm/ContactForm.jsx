import Contact from "../Contact/Contact";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ContactFormCss from "./ContactForm.module.css"


const ContactForm = ({onAdd}) => {
    const AddContactSchema = Yup.object().shape({
        name: Yup.string()
          .min(3, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        number: Yup.string()
          .required('Required'),
      })
return (
    <Formik initialValues={{
        name: '',
        number: '',
      }}
       validationSchema={AddContactSchema}
       onSubmit={onAdd}>
        <Form className={`${ContactFormCss.form}`}>
        <label htmlFor="name" className={`${ContactFormCss.lblName}`}>Name</label>
        <Field id="name" name="name"className={`${ContactFormCss.fieldName}`}></Field>
        <ErrorMessage name="name" >
        { msg => <div style={{ color: 'red' }}>{msg}</div> }
        </ErrorMessage>
        <label htmlFor="number"className={`${ContactFormCss.lblNumber}`}>Number</label>
        <Field id="number" name="number"className={`${ContactFormCss.fieldNumber}`}></Field>
        <ErrorMessage name="number" >
        { msg => <div style={{ color: 'red' }}>{msg}</div> }
        </ErrorMessage>
        <button type="submit" className={`${ContactFormCss.btnAdd}`}>Add Contact</button>
        </Form>
    </Formik>
    
)
}

export default ContactForm;


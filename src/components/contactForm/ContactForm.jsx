import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./contactForm.module.css"

const ContactForm = ({ onAddContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Minimum 3 characters required")
      .max(50, "Maximum 50 characters required")
      .required("*Required"),
    number: Yup.string()
      .matches(/^[0-9-]+$/, "Only numbers and hyphens are allowed")
      .min(3, "Minimum 3 characters required")
      .max(50, "Maximum 50 characters required")
      .required("*Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <label className={css.label}>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" />
        </label>

        <label className={css.label}>
          Number
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="div" />
        </label>

        <button className={css.formButton} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

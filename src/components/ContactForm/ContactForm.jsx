import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ addContact, contacts }) => {
  const orderSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Name is required'),
    number: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
      .required('Phone number is required'),
  });

  const handleForm = (values, { resetForm }) => {
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    addContact(values);
    resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleForm}
        validationSchema={orderSchema}
      >
        <Form className={s.contactForm}>
          <label className={s.formLabel}>
            Name
            <Field className={s.formInput} name="name" placeholder="Enter name" />
            <ErrorMessage className={s.inputErr} name="name" component="p" />
          </label>
          <label className={s.formLabel}>
            Number
            <Field className={s.formInput} name="number" placeholder="+1234567890" />
            <ErrorMessage className={s.inputErr} name="number" component="p" />
          </label>
          <button className={s.formBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactForm;

import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁё\s]+$/, "Name must only contain letters")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must only contain numbers")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
export default function ContactForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: crypto.randomUUID(),
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <Field 
              type="text" 
              name="name" 
              id="name" 
              className={styles.input} 
            />
            <ErrorMessage
              name="name"
              component="span"
              className={styles.errorMessage}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="number" className={styles.label}>Number</label>
            <Field 
              type="tel" 
              name="number" 
              id="number" 
              className={styles.input} 
            />
            <ErrorMessage
              name="number"
              component="span"
              className={styles.errorMessage}
            />
          </div>

          <button type="submit" className={styles.btn} disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}

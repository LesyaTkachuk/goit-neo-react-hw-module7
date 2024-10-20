import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoPersonAddSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addContact } from "src/redux/contactsOps";

import Button from "../Button";

import css from "./ContactForm.module.css";

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(18, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css["input-wrapper"]}>
          <label htmlFor={nameId}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameId}
            autoComplete="off"
          />
          <ErrorMessage className={css.error} component="span" name="name" />
        </div>

        <div className={css["input-wrapper"]}>
          <label htmlFor={numberId}>Number</label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={numberId}
            autoComplete="off"
          />
          <ErrorMessage className={css.error} component="span" name="number" />
        </div>

        <Button type="submit" title="Add contact" icon={<IoPersonAddSharp />} />
      </Form>
    </Formik>
  );
};

export default ContactForm;

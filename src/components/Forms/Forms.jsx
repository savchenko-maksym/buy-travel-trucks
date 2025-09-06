import { Form, Field, Formik } from "formik";
import s from "./Forms.module.css";

const Forms = () => {
  const initialValues = {
    username: "",
    email: "",
    date: "",
    comment: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <div>
      <div className={s.titleFormWrap}>
        <p className={s.titleForm}>Book your campervan now</p>
        <span className={s.titleDescription}>
          Stay connected! We are always ready to help you.
        </span>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.formBook}>
          <Field
            className={s.field}
            type="text"
            name="username"
            placeholder="Name*"
          />
          <Field
            className={s.field}
            type="email"
            name="email"
            placeholder="Email*"
          />
          <Field
            className={s.field}
            type="date"
            name="date"
            placeholder="Booking date*"
          />
          <Field
            className={s.fieldComment}
            as="textarea"
            name="comment"
            placeholder="Comment"
          />
          <button className={s.btn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Forms;

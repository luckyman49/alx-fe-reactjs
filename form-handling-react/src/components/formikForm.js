import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string().required("Username is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={(values) => {
        console.log("Formik registered:", values);
      }}
    >
      <Form className="p-6 bg-white shadow rounded max-w-md mx-auto md:max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Register (Formik)</h1>
        <Field name="username" placeholder="Username" className="block w-full border rounded px-3 py-2 mb-2" />
        <ErrorMessage name="username" component="p" className="text-red-600" />
        <Field name="email" type="email" placeholder="Email" className="block w-full border rounded px-3 py-2 mb-2" />
        <ErrorMessage name="email" component="p" className="text-red-600" />
        <Field name="password" type="password" placeholder="Password" className="block w-full border rounded px-3 py-2 mb-2" />
        <ErrorMessage name="password" component="p" className="text-red-600" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded md:w-auto w-full">
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default FormikForm;

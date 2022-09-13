import { Formik, FormikHelpers } from "formik";
import React from "react";
import { registerSchema } from "../../../schemas";
import MyFormikField from "../../atoms/MyFormikField";
import { InitialValuesProps } from "./types";
import { useCreateUser } from "../../../hooks/useCreateUser";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const { handleSubmit, data, loading, error } = useCreateUser();

  if (error) return "Error";

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={(values, actions: FormikHelpers<InitialValuesProps>) => {
        handleSubmit(values, actions);
        actions.resetForm();
      }}
    >
      {(props) => (
        <form autoComplete="off" onSubmit={props.handleSubmit}>
          <MyFormikField name="firstname" type="text" label="First Name" />
          <MyFormikField name="lastname" type="text" label="Last Name" />
          <MyFormikField name="email" type="email" label="Email Address" />
          <MyFormikField name="password" type="password" label="Password" />
          <MyFormikField
            name="confirmPassword"
            type="password"
            label="Confirm Password"
          />
          {error && <p>{error.message}</p>}
          <button type="submit">{loading ? "Submitting" : "Submit"}</button>
        </form>
      )}
    </Formik>
  );
};

export default Register;

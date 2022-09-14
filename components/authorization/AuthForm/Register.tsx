import { Formik, FormikHelpers } from "formik";
import React from "react";
import { registerSchema } from "../../../schemas/auth";
import MyFormikField from "../../atoms/MyFormikField";
import { InitialValuesProps } from "./types";
import { useCreateUser } from "../../../hooks/useCreateUser";
import { useRouter } from "next/router";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const { createUser, data, loading, error } = useCreateUser();
  const router = useRouter();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={async (values, actions: FormikHelpers<InitialValuesProps>) => {
        createUser(values);
        actions.resetForm();
        router.push("/");
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

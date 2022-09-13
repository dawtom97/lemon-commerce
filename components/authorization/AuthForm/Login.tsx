import { Formik, FormikHelpers } from "formik";
import React from "react";
import { loginSchema } from "../../../schemas/auth";
import MyFormikField from "../../atoms/MyFormikField";
import { InitialLoginProps } from "./types";
import { useGenerateToken } from "../../../hooks/useGenerateToken";
import { useRouter } from "next/router";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { handleLogin, data, loading, error } = useGenerateToken();
  const router = useRouter();
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={async (values, actions: FormikHelpers<InitialLoginProps>) => {
        await handleLogin(values);
        actions.resetForm();
        router.push("/");
      }}
    >
      {(props) => (
        <form autoComplete="off" onSubmit={props.handleSubmit}>
          <MyFormikField name="email" type="email" label="Email Address" />
          <MyFormikField name="password" type="password" label="Password" />
          {error && <p>{error.message}</p>}
          <button type="submit">{loading ? "Submitting" : "Login"}</button>
        </form>
      )}
    </Formik>
  );
};

export default Login;

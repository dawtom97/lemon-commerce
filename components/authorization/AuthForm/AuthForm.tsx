import { Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import { registerSchema } from "../../../schemas";
import { Heading } from "../../atoms/Heading";
import MyFormikField from "../../atoms/MyFormikField";
import * as Styled from "./styles";

interface Props {
  isRegister: boolean;
}

interface InitialValuesProps {
  firstname: String | any;
  lastname: String;
  email: String;
  password: String;
  confirmPassword: String;
}

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const AuthForm = ({ isRegister}: Props) => {


  const handleSubmit = (
    values: InitialValuesProps,
    actions: FormikHelpers<InitialValuesProps>
  ) => {
    console.log("co jest xd");
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <Styled.Wrapper>
      <Heading isLarge level="h1">
        {isRegister ? "Sign up" : "Sign in"}
      </Heading>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={(values, actions: FormikHelpers<InitialValuesProps>) =>
            handleSubmit(values, actions)
          }
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
               <MyFormikField name="firstname" type="text" label="First Name"/>
               <MyFormikField name="lastname" type="text" label="Last Name"/>
               <MyFormikField name="email" type="email" label="Email Address"/>
               <MyFormikField name="password" type="password" label="Password"/>
               <MyFormikField name="confirmPassword" type="password" label="Confirm Password"/>
               <button type="submit">{props.isSubmitting ? "Submitting" : "Submit"}</button>
            </form>
          )}
        </Formik>
      </div>
    </Styled.Wrapper>
  );
};

export default AuthForm;

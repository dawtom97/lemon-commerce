import { Field, Form, Formik, useFormik } from "formik";
import React from "react";
import { Heading } from "../../atoms/Heading";
import * as Styled from "./styles";

interface Props {
  isRegister: boolean;
}

const AuthForm = ({ isRegister }: Props) => {
  const {values,handleChange,handleBlur} = useFormik({
    initialValues:{
      email:"",
      age:"",
      password:"",
      confirmPassword:""
    },
  });
  return (
    <Styled.Wrapper>
      <Heading isLarge level="h1">
        {isRegister ? "Sign up" : "Sign in"}
      </Heading>
      <div>
        <form autoComplete="off">
            <input id="email" value={values.email} onChange={handleChange} placeholder="Enter your email" />
            <input id="age" value={values.age} onChange={handleChange} placeholder="Enter your age" />
            <input id="password" value={values.password} onChange={handleChange} placeholder="Enter your password" />
        </form>

                

     
      </div>
    </Styled.Wrapper>
  );
};

export default AuthForm;

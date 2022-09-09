import React from "react";
import { Heading } from "../../atoms/Heading";
import * as Styled from "./styles";
import { Field, Form, Formik, FormikProps } from "formik";

const MyInput = ({ field, form, ...props }: any) => {
  return <input {...field} {...props} />;
};

interface Props {
  isRegister: boolean;
}

const AuthForm = ({ isRegister }: Props) => {
  return (
    <Styled.Wrapper>
      <Heading isLarge level="h1">
        {isRegister ? "Sign up" : "Sign in"}
      </Heading>
      <div>
        <Formik
          initialValues={{
            email: "",
            color: "green",
            firstName: "",
            lastName: "",
          }}
          onSubmit={(values, actions) => {
            console.log(actions)
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props: FormikProps<any>) => {
            console.log(props)
            return (
            
            <Form>
              {props.isSubmitting && <p>WYSYLANIE</p>}

              <Field type="email" name="email" placeholder="Email" />
              <Field as="select" name="color">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>

              <Field name="lastName">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }: any) => (
                  <div>
                    <input type="text" placeholder="Email" {...field} />
                    {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
              <Field name="lastName" placeholder="Doe" component={MyInput} />
              <button type="submit">Submit</button>
            </Form>
          )}}
        </Formik>
      </div>
    </Styled.Wrapper>
  );
};

export default AuthForm;

import {
  Field,
  Form,
  Formik,
  FormikConfig,
  FormikValues,
  useFormik,
} from "formik";
import React, { useState } from "react";
import { basicSchema } from "../../../schemas";
import { Heading } from "../../atoms/Heading";
import * as Styled from "./styles";

interface Props {
  isRegister: boolean;
  onSubmit: any;
}

interface FormValues {
  email: string;
  age: string;
  password: string;
  confirmPassword: string;
}

const TextField = () => <input />;
const Checkbox = () => <input type="checkbox" />;

const initialValues = {
  firstname: "",
  lastname: "",
  millionaire: false,
  money: 1000,
  description: "",
};

const AuthForm = ({ isRegister, onSubmit }: Props) => {
  return (
    <Styled.Wrapper>
      <Heading isLarge level="h1">
        {isRegister ? "Sign up" : "Sign in"}
      </Heading>
      <div>
        <FormikStepper initialValues={initialValues} onSubmit={() => {}}>
          <FormikStep >
            <Field name="firstname" label="First Name" />
            <Field name="lastname" label="Last Name" />
            <Field
              name="millionaire"
              type="checkbox"
              label="Im a millionaire"
            />
          </FormikStep>
          <FormikStep >
            <Field name="money" type="number" label="Money" />
          </FormikStep>

          <FormikStep >
            <Field name="description" label="Description" />
          </FormikStep>
        </FormikStepper>
      </div>
    </Styled.Wrapper>
  );
};

export default AuthForm;

interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {}

export const FormikStep = ({ children }: FormikStepProps) => {
  return <>{children}</>;
};

export const FormikStepper = ({
  children,
  ...props
}: FormikConfig<FormValues> | any) => {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  console.log(currentChild.props)

  const isLastStep = () => step === childrenArray.length - 1;

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values: any, helpers: any) => {
        if (step === childrenArray.length - 1) {
          await props.onSubmit(values, helpers);
        } else {
          setStep((prev) => prev + 1);
        }
      }}
    >
      <Form autoComplete="off">
        {currentChild}
        {step > 0 ? (
          <button onClick={() => setStep((prev) => prev - 1)}>Back</button>
        ) : null}
        <button type="submit">{isLastStep() ? "Submit" : "Next"}</button>
      </Form>
    </Formik>
  );
};

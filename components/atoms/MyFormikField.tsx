import { useField } from "formik";
import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  & input {
    display: block;
  }
`


const MyFormikField = ({ label, ...props }: any) => {
  const [field, meta, helpers] = useField(props);
  return (
    <Wrapper>
      <label>
        {label}
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </Wrapper>
  );
};

export default MyFormikField;

import React, { useState } from "react";
import styled from "styled-components";
import AuthBanner from "../components/authorization/AuthBanner/AuthBanner";
import AuthForm from "../components/authorization/AuthForm/AuthForm";
import AuthTemplate from "../components/templates/AuthTemplate/AuthTemplate";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <AuthTemplate>
      <Wrapper>
        <AuthForm isRegister={isRegister} />
        <AuthBanner
          isRegister={isRegister}
          onClick={() => setIsRegister((prev) => !prev)}
        />
      </Wrapper>
    </AuthTemplate>
  );
};

export default Auth;

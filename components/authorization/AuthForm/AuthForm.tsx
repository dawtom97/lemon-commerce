import React, { useState } from "react";
import { Heading } from "../../atoms/Heading";
import Login from "./Login";
import Register from "./Register";
import * as Styled from "./styles";
import { AuthProps } from "./types";

const AuthForm = ({ isRegister }: AuthProps) => {
  return (
    <Styled.Wrapper>
      <Heading isLarge level="h1">
        {isRegister ? "Sign up" : "Sign in"}
      </Heading>
      <div>
        {isRegister ? <Register /> : <Login/>}
      </div>
    </Styled.Wrapper>
  );
};

export default AuthForm;

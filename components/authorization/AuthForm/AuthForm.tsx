import React, { useState } from "react";
import { Heading } from "../../atoms/Heading";
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
        <Register />
      </div>
    </Styled.Wrapper>
  );
};

export default AuthForm;

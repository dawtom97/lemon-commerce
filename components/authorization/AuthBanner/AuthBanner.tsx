import React from "react";
import { Button } from "../../atoms/Button";
import { Paragraph } from "../../atoms/Paragraph";
import * as Styled from "./styles";

interface Props {
    onClick:any,
    isRegister:boolean
}

const AuthBanner = ({onClick,isRegister}:Props) => {
  return (
    <Styled.Wrapper>
      <Styled.Box>
        <Styled.Blur />

        <div>
          <Paragraph isCustomSize="2" isBold>
            We are
          </Paragraph>
          <Paragraph isLarge isThin>
            Invite only right now.
          </Paragraph>
          <Paragraph isThin>
            10 Million+ people have joined our network. <br /> We invite yout to
            join the tribe
          </Paragraph>
        </div>

        <div>
          <Paragraph isCustomSize="2" isBold>
            {isRegister ? ' Already have an account?' : "You don't have an account?"}
           
          </Paragraph>
          <Button onClick={onClick} design="transparent">{isRegister ? 'Sign in' : 'Sign up'}</Button>
        </div>
      </Styled.Box>
    </Styled.Wrapper>
  );
};

export default AuthBanner;

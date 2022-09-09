import React, { ReactNode } from 'react';
import * as Styled from './styles';

interface Props {
    children?:ReactNode
}

const AuthTemplate = ({children}: Props ) => {
  return (
    <Styled.Wrapper>
        {children}
    </Styled.Wrapper>
  )
}

export default AuthTemplate

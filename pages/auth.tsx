import React, { useState } from 'react';
import styled from 'styled-components';
import AuthBanner from '../components/authorization/AuthBanner/AuthBanner';
import LoginForm from '../components/authorization/LoginForm/LoginForm';


const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
`

const Auth = () => {
  const [isRegister,setIsRegister] = useState(false);

  return (
    <Wrapper>
        <AuthBanner isRegister={isRegister} onClick={()=>setIsRegister(prev=>!prev)}/>
        {isRegister ? null : <LoginForm/>}
    </Wrapper>
  )
}

export default Auth;
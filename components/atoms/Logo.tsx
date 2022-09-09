import styled from "styled-components";
import React from 'react';

const Wrapper = styled.div`
    color: #fff;
    font-size: 1.6rem;
    font-weight: 300;
    position: relative;
    padding: 5px 10px;
    width: fit-content;
    & > span {
        font-weight: 600;
    }
    &::before {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgb(145 145 145 / 28%);
    position: absolute;
    content: "";
    z-index: -1;
    box-shadow: 0 4px 30px rgba(0,0,0,0.1);
    -webkit-backdrop-filter: blur(5.9px);
    backdrop-filter: blur(5.9px);
    -webkit-backdrop-filter: blur(5.9px);
    }
`

const Logo = () => {
  return (
    <Wrapper>
        <span> LEMON</span>
        <br/> COMMERCE
    </Wrapper>
  )
}

export default Logo

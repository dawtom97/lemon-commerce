import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url('/authImage.jpg');
  background-position: center;
  background-size: cover;
  height: 350px;
  display: flex;
  align-items:center;
  justify-content: center;
`

export const Box = styled.div`
  padding: 20px;
  border-radius: 8px;
  background: rgba(9, 9, 9, 0.38);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.9px);
-webkit-backdrop-filter: blur(5.9px);
width: 85%;
height: 80%;
`
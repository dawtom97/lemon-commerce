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
  overflow: hidden;
border-radius: 16px;
width: 85%;
height: 80%;
position: relative;
z-index: 1;
`

export const Blur = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    background: rgba(9, 9, 9, 0.38);
    position: absolute;
    content: "";
    z-index: -1;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.9px);
    -webkit-backdrop-filter: blur(5.9px);
`
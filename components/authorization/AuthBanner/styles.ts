import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url("/banner2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media (min-width: 992px) {
    min-height: 100vh;
    width: 50%;
  }
`;

export const Box = styled.div`
  padding: 20px;
  overflow: hidden;
  border-radius: 16px;
  width: 85%;
  height: 40%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div > p:first-of-type {
    margin-top: 20px;
  }
  @media (min-width: 992px) {
    width: 75%;
  }
`;

export const Blur = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgb(187 187 187 / 80%);
  position: absolute;
  content: "";
  z-index: -1;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.9px);
  -webkit-backdrop-filter: blur(3.9px);
`;

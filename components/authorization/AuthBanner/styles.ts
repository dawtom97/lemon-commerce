import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url("/authImage.jpg");
  background-position: center;
  background-size: cover;
  height: 450px;
  display: flex;
  border-radius: 0px 0px 30px 30px;
  box-shadow: 0px 8px 15px #b4b4b4;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  /* stretch element outside his parent (parent is 85% window width) */
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  @media (min-width: 992px) {
    min-height: 100vh;
    width: 40%;
    border-radius: 0px 60px 60px 0;
    box-shadow: 9px 8px 15px #b4b4b4;
  }
`;

export const Box = styled.div`
  padding: 20px;
  overflow: hidden;
  border-radius: 16px;
  width: 85%;
  height: 80%;
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
  background: rgba(9, 9, 9, 0.38);
  position: absolute;
  content: "";
  z-index: -1;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.9px);
  -webkit-backdrop-filter: blur(5.9px);
`;

import styled from "styled-components";

const Footer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px 0;
    padding: 0 24px;
  }

  hr {
    width: 90%;
    border-bottom: 0.1em solid light-grey;
  }

  span {
    font-size: 30px;
  }
`;

export default Footer;

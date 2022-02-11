import styled from "styled-components";

const Header = styled.div`
  width: 100vw;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;

  img {
    height: 70px;
    width: auto;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0 12px;
  }

  div:first-of-type {
    justify-content: space-between;
    padding: 0 24px;
    margin-top: 5px;
  }

  div:last-of-type {
    margin-top: 20px;
  }

  h1 {
    width: 50%;
  }
  p {
    width: 20%;
  }
  span {
    max-width: 35%;
  }
`;

export default Header;

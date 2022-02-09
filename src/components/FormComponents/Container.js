import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    height: auto;
  }

  h1 {
    color: var(--blue);
    text-align: center;
    font-size: 40px;
  }

  h2 {
    color: var(--blue);
    text-align: center;
    font-size: 25px;
    margin-top: 40px;
  }

  span {
    color: var(--black);
    font-size: 15px;
  }
`;

export default Container;

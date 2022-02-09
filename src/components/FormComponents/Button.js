import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue);
  border: 0px solid;
  color: var(--white);
  font-size: 20px;
  line-height: 23.48px;
  font-weight: 700;
  &:hover {
    opacity: 0.8;
  }

  margin: 15px 0;
`;

export default Button;

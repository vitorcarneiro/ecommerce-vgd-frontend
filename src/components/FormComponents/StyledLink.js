import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: var(--blue);
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  line-height: 17px;
  margin-top: 36px;

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;

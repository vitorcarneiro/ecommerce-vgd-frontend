import styled from 'styled-components';
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";

export default function FooterCart() {
        return (
            <Footer>
                <Link to="/cart">
                    <BsFillCartFill/>
                    <div>
                        0
                    </div>
                </Link>
            </Footer>
        );
}

const Footer = styled.footer`
  position: fixed;
  bottom: 15px;
  right: 25px;

  svg {
    color: #3bb273;
    width: 50px;
    height: 50px;

    cursor: pointer;
  }

  div {
    position: absolute;
    top: 0;
    right: -5px;
    width: 20px;
    height: 20px;
    background-color: #3bb273;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 700;
  }
`;


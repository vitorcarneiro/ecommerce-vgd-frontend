import styled from 'styled-components';
import { BsFillCartFill } from "react-icons/bs";

export default function FooterCart() {

        return (
            <Footer>
                <BsFillCartFill/>
                <div>
                    0
                </div>
            </Footer>
        );
}

const Footer = styled.footer`
    position: fixed;
    bottom: 15px;
    right: 25px;

    svg {
        color: #3BB273;
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
        background-color: #3BB273;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;
        font-weight: 700;
    }
`;
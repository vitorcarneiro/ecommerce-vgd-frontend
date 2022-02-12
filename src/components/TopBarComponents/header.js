import styled from 'styled-components';
import logo from "../../assets/images/logo-meu-velho-completo.png";
import { Link } from "react-router-dom";

export default function TopBar() {
    return (
            <Header>
                <img alt="logo" src={logo} />

                <div>

                    <StyledLink to={'/login'}>Entre</StyledLink>
                    {`\n`}ou<br/>
                    <StyledLink to={'/register'}>Cadastre-se</StyledLink>
                </div>
            </Header>
    );
}

const Header = styled.header`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;

    width: 100%;
    height: 90px;
    background-color: #FFF;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);

    padding: 0 15px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 2px solid #004BD8;

    img {
        height: 70px;
        align-self: start;
        margin-top: 5px;
    }

    font-family: 'Montserrat', sans-serif;
    color: #004BD8;
    font-weight: 700;
    font-size: 14px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover {
        text-decoration: underline;
    }

    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #004BD8;
    ${({ isLoading }) =>
        (isLoading && `
            opacity: 0.7 !important;
            pointer-events: none !important;
        `)
    };
`;
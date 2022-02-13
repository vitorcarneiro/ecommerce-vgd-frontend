import styled from 'styled-components';
import logo from "../../assets/images/logo-meu-velho-completo.png";
import { Link } from "react-router-dom";
import { IoExit } from "react-icons/io5";

import useAuth from "../../hooks/useAuth.js";

export default function TopBar() {
    const { auth, storeLogin } = useAuth();

    function logOut() {
        storeLogin(null);
        localStorage.removeItem('auth');
    }

    return (
            <Header>
                <img alt="logo" src={logo} />

                <div>
                    <p>Bem-vindo :)</p>
                    {auth ?
                        (
                            <>
                                <div>{auth.user}</div>
                                <Exit onClick={ () => logOut() }>
                                    <p>Sair</p>
                                    <IoExit/>
                                </Exit>
                                    
                            </>
                        ) :
                        (
                            <>
                                <StyledLink to={'/login'}>Entre</StyledLink>
                                <span> ou<br/></span> 
                                <StyledLink to={'/register'}>Cadastre-se</StyledLink>
                            </>
                        )
                    }
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
    height: 82px;
    background-color: #FFF;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);

    padding: 0 15px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    border-bottom: 3px solid #004BD8;

    img {
        height: 70px;
        align-self: start;
        margin-top: 5px;
    }

    font-family: 'Montserrat', sans-serif;
    color: #004BD8;
    font-size: 14px;

    p {
        font-weight: 700;
    }

    svg {
        width: 25px;
        height: 25px;
    }

    div {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
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

const Exit = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 5px;
    cursor: pointer;
`;
import styled from 'styled-components';

export default function Home() {
    return (
        <Container>
            Home
        </Container>
    );
}

const Container = styled.main`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #8C11BE;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: normal;

    h1 {
        font-family: 'Saira Stencil One', cursive;
        color: #FFF;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        margin: 0;
    }
`;
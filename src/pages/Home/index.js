import styled from 'styled-components';

export default function Home() {
    return (
        <Container>
            <TopBar>
                Header
            </TopBar>


            <ProductContainer>
                <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
            
                <Specs>
                    <h1>Alicate pra gatonet</h1>
                    <p>R$ 29,90</p>
                </Specs>
            </ProductContainer>
            
            <ProductContainer>
                <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
            
                <Specs>
                    <h1>Alicate pra gatonet</h1>
                    <p>R$ 29,90</p>
                </Specs>
            </ProductContainer>

            <ProductContainer>
                <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
            
                <Specs>
                    <h1>Alicate pra gatonet</h1>
                    <p>R$ 29,90</p>
                </Specs>
            </ProductContainer>

            <ProductContainer>
                <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
            
                <Specs>
                    <h1>Alicate pra gatonet</h1>
                    <p>R$ 29,90</p>
                </Specs>
            </ProductContainer>

            <ProductContainer>
                <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
            
                <Specs>
                    <h1>Alicate pra gatonet</h1>
                    <p>R$ 29,90</p>
                </Specs>
            </ProductContainer>

            <ProductContainer>
                <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
            
                <Specs>
                    <h1>Alicate pra gatonet</h1>
                    <p>R$ 29,90</p>
                </Specs>
            </ProductContainer>

            <ProductContainer>
                <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
            
                <Specs>
                    <h1>Alicate pra gatonet</h1>
                    <p>R$ 29,90</p>
                </Specs>
            </ProductContainer>

            <ProductContainer>
                <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
            
                <Specs>
                    <h1>Alicate pra gatonet</h1>
                    <p>R$ 29,90</p>
                </Specs>
            </ProductContainer>

            <ProductContainer>
                <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
            
                <Specs>
                    <h1>Alicate pra gatonet</h1>
                    <p>R$ 29,90</p>
                </Specs>
            </ProductContainer>

            <ProductContainer>
                <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
            
                <Specs>
                    <h1>Alicate pra gatonet</h1>
                    <p>R$ 29,90</p>
                </Specs>
            </ProductContainer>

            <ProductContainer>
                <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
            
                <Specs>
                    <h1>Alicate pra gatonet</h1>
                    <p>R$ 29,90</p>
                </Specs>
            </ProductContainer>

            <FooterBar>
                Footer
            </FooterBar>
        </Container>
    );
}

const Container = styled.main`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    box-sizing: border-box;
    padding: 200px 15px;
    
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: center;
    gap: 20px;
    overflow-y: scroll;

    background-color: #D3D3D3;

    font-family: 'Montserrat', sans-serif;
`;


const ProductContainer = styled.div`
    width: 170px;
    height: 250px;

    border-radius: 25px;
    overflow: hidden;
    background-color: #FFF;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
        height: 65%;
        width: 95%;
        object-fit: contain;
        border: 2px solid #004BD8;
        border-radius: 25px;
        background-color: white;
    }
    
    cursor: pointer;
`;

const Specs = styled.div`
    width: 100%;
    height: 30%;
    
    box-sizing: border-box;
    padding: 0 10px;
    
    h1 {
        margin: 0;
        font-weight: 600;
        font-size: 17px;
        line-height: 18px;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    
    p {
        margin: 10px 0 0 0;
        font-weight: bold;
        color: #004BD8;
    }
    `;

const FooterBar = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 100px;

    background-color: lightblue;
`;

const TopBar = styled.header`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100px;

    background-color: lightcoral;
`;
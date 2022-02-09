import styled from 'styled-components';

export default function Home() {
    return (
        <Container>
            <TopBar>
                Header
            </TopBar>

            <Highlights>
                <h1>Destaques</h1>
                <ProductsView>
                    <ProductContainer>
                        <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
                    
                        <Specs>
                            <h1>Alicate pra gatonet</h1>
                            <p>R$ 29,90</p>
                            <div>
                                +
                            </div>
                        </Specs>
                    </ProductContainer>
                    
                    <ProductContainer>
                        <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
                    
                        <Specs>
                            <h1>Alicate pra gatonet</h1>
                            <p>R$ 29,90</p>
                            <div>
                                +
                            </div>
                        </Specs>
                    </ProductContainer>
                    
                    <ProductContainer>
                        <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
                    
                        <Specs>
                            <h1>Alicate pra gatonet</h1>
                            <p>R$ 29,90</p>
                            <div>
                                +
                            </div>
                        </Specs>
                    </ProductContainer>
                    
                    <ProductContainer>
                        <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
                    
                        <Specs>
                            <h1>Alicate pra gatonet</h1>
                            <p>R$ 29,90</p>
                            <div>
                                +
                            </div>
                        </Specs>
                    </ProductContainer>
                    
                    <ProductContainer>
                        <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
                    
                        <Specs>
                            <h1>Alicate pra gatonet</h1>
                            <p>R$ 29,90</p>
                            <div>
                                +
                            </div>
                        </Specs>
                    </ProductContainer>
                    
                    <ProductContainer>
                        <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
                    
                        <Specs>
                            <h1>Alicate pra gatonet</h1>
                            <p>R$ 29,90</p>
                            <div>
                                +
                            </div>
                        </Specs>
                    </ProductContainer>
                    
                    <ProductContainer>
                        <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
                    
                        <Specs>
                            <h1>Alicate pra gatonet</h1>
                            <p>R$ 29,90</p>
                            <div>
                                +
                            </div>
                        </Specs>
                    </ProductContainer>
                    
                    <ProductContainer>
                        <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
                    
                        <Specs>
                            <h1>Alicate pra gatonet</h1>
                            <p>R$ 29,90</p>
                            <div>
                                +
                            </div>
                        </Specs>
                    </ProductContainer>
                    
                    <ProductContainer>
                        <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
                    
                        <Specs>
                            <h1>Alicate pra gatonet</h1>
                            <p>R$ 29,90</p>
                            <div>
                                +
                            </div>
                        </Specs>
                    </ProductContainer>
                    
                    
                </ProductsView>
            </Highlights>

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
    overflow: hidden;
    
    background-color: #D3D3D3;

    font-family: 'Montserrat', sans-serif;
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

const Highlights = styled.div`
    height: 420px;
    display: flex;
    flex-direction: column;

    overflow: hidden;

    h1 {
        margin: 0;
    }
`;

const ProductsView = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    
    align-items: center;
    gap: 20px;

    overflow-x: scroll;

`;


const ProductContainer = styled.div`
    width: 250px;
    height: 350px;

    border-radius: px;
    background-color: #FFF;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
    border-bottom: 3px groove #004BD8;

    padding: 10px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
        width: 220px;
        object-fit: contain;
        background-color: white;
        overflow: hidden;
    }
`;



const Specs = styled.div`
    width: 100%;
    height: 30%;
    
    box-sizing: border-box;
    padding: 0 10px;

    display: flex;
    flex-direction: column;

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

    div {
        width: 35px;
        height: 35px;

        background-color: #004BD8;
        border-radius: 5px;

        color: #FFF;
        text-align: center;
        line-height: 35px;
        font-size: 35px;
        font-weight: 700;

        align-self: end;

        cursor: pointer;
    }
`;
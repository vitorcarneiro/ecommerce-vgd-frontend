import styled from 'styled-components';
import { useNavigate } from "react-router";

import { BsPlusSquareFill, BsSearch } from "react-icons/bs";
import bigLogo from "../../assets/images/logo-meu-velho-completo.png";


export default function Home() {
    return (
        <Container>
            <TopBar>
                <img alt="logo" src={bigLogo} />
            </TopBar>

            <FindProductBar>
                <SearchBar
                    type='search'
                    placeholder='O que você está procurando?'
                />

                <BsSearch />
            </FindProductBar>

            <NavBar>
                <div className='geral'>
                    GERAL
                </div>
                
                <div className='pintura'>
                    PINTURA
                </div>

                <div className='eletrica'>
                    ELÉTRICA
                </div>

                <div className='hidraulica'>
                    HIDRÁULICA
                </div>

            </NavBar>

            <Highlights>
                <h1>Destaques</h1>
                <ProductsView>
                    <ProductContainer>
                        <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
                    
                        <Specs>
                            <h1>Alicate pra gatonet</h1>
                            <p>R$ 29,90</p>
                        
                            <BsPlusSquareFill/>
                            
                        </Specs>
                    </ProductContainer>
                    
                    <ProductContainer>
                        <img alt="alicate" src="https://telhanorte.vteximg.com.br/arquivos/ids/339147-NaN-NaN/1399551.jpg?v=636927466688400000"/>
                    
                        <Specs>
                            <h1>Disjuntor pra não ficar sem gato</h1>
                            <p>R$ 59,90</p>
                        
                            <BsPlusSquareFill/>
                            
                        </Specs>
                    </ProductContainer>
                    
                    <ProductContainer>
                        <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
                    
                        <Specs>
                            <h1>Alicate pra gatonet</h1>
                            <p>R$ 29,90</p>
                        
                            <BsPlusSquareFill/>
                            
                        </Specs>
                    </ProductContainer>
                    
                    <ProductContainer>
                        <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
                    
                        <Specs>
                            <h1>Alicate pra gatonet</h1>
                            <p>R$ 29,90</p>
                        
                            <BsPlusSquareFill/>
                            
                        </Specs>
                    </ProductContainer>
                    
                    <ProductContainer>
                        <img alt="alicate" src="https://img.irroba.com.br/fit-in/400x400/filters:fill(fff):quality(95)/casadasc/catalog/makita/cipatex/gedore/alicate.jpg"/>
                    
                        <Specs>
                            <h1>Alicate pra gatonet</h1>
                            <p>R$ 29,90</p>
                        
                            <BsPlusSquareFill/>
                            
                        </Specs>
                    </ProductContainer>
                </ProductsView>
            </Highlights>

            <OthersProductsContainer>
                <OtherProduct>
                    <img alt="alicate" src="https://picsum.photos/300/300"/>
                
                    <Specs>
                        <h1>Alicate pra gatonet</h1>
                        <p>R$ 29,90</p>
                    
                        <BsPlusSquareFill className='small'/>
                        
                    </Specs>
                </OtherProduct>

                
                <OtherProduct>
                    <img alt="alicate" src="https://picsum.photos/300/300"/>
                
                    <Specs>
                        <h1>Alicate pra gatonet</h1>
                        <p>R$ 29,90</p>
                    
                        <BsPlusSquareFill className='small'/>
                        
                    </Specs>
                </OtherProduct>

                
                <OtherProduct>
                    <img alt="alicate" src="https://picsum.photos/300/300"/>
                
                    <Specs>
                        <h1>Alicate pra gatonet</h1>
                        <p>R$ 29,90</p>
                    
                        <BsPlusSquareFill className='small'/>
                        
                    </Specs>
                </OtherProduct>

                
                <OtherProduct>
                    <img alt="alicate" src="https://picsum.photos/300/300"/>
                
                    <Specs>
                        <h1>Alicate pra gatonet</h1>
                        <p>R$ 29,90</p>
                    
                        <BsPlusSquareFill className='small'/>
                        
                    </Specs>
                </OtherProduct>

                
                <OtherProduct>
                    <img alt="alicate" src="https://picsum.photos/300/300"/>
                
                    <Specs>
                        <h1>Alicate pra gatonet</h1>
                        <p>R$ 29,90</p>
                    
                        <BsPlusSquareFill className='small'/>
                        
                    </Specs>
                </OtherProduct>

                
                <OtherProduct>
                    <img alt="alicate" src="https://picsum.photos/300/300"/>
                
                    <Specs>
                        <h1>Alicate pra gatonet</h1>
                        <p>R$ 29,90</p>
                    
                        <BsPlusSquareFill className='small'/>
                        
                    </Specs>
                </OtherProduct>

                
                <OtherProduct>
                    <img alt="alicate" src="https://picsum.photos/300/300"/>
                
                    <Specs>
                        <h1>Alicate pra gatonet</h1>
                        <p>R$ 29,90</p>
                    
                        <BsPlusSquareFill className='small'/>
                        
                    </Specs>
                </OtherProduct>

                
                <OtherProduct>
                    <img alt="alicate" src="https://picsum.photos/300/300"/>
                
                    <Specs>
                        <h1>Alicate pra gatonet</h1>
                        <p>R$ 29,90</p>
                    
                        <BsPlusSquareFill className='small'/>
                        
                    </Specs>
                </OtherProduct>

                
                <OtherProduct>
                    <img alt="alicate" src="https://picsum.photos/300/300"/>
                
                    <Specs>
                        <h1>Alicate pra gatonet</h1>
                        <p>R$ 29,90</p>
                    
                        <BsPlusSquareFill className='small'/>
                        
                    </Specs>
                </OtherProduct>

                
                <OtherProduct>
                    <img alt="alicate" src="https://picsum.photos/300/300"/>
                
                    <Specs>
                        <h1>Alicate pra gatonet</h1>
                        <p>R$ 29,90</p>
                    
                        <BsPlusSquareFill className='small'/>
                        
                    </Specs>
                </OtherProduct>

                
                <OtherProduct>
                    <img alt="alicate" src="https://picsum.photos/300/300"/>
                
                    <Specs>
                        <h1>Alicate pra gatonet</h1>
                        <p>R$ 29,90</p>
                    
                        <BsPlusSquareFill className='small'/>
                        
                    </Specs>
                </OtherProduct>

                
            </OthersProductsContainer>

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
    padding: 200px 10px;
    overflow-y: scroll;
    
    background-color: #FFF;

    font-family: 'Montserrat', sans-serif;
`;

const NavBar = styled.div`
    width: 100%;
    height: 15px;
    margin-bottom: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #757575;
    font-weight: 700;

    div {
        cursor: pointer;
    }

    .geral {
        color: #004BD8;
        border-bottom: 3px solid #004BD8;
    }
`;


const FooterBar = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 80px;

    background-color: lightblue;
`;

const TopBar = styled.header`
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

    border-bottom: 2px solid #004BD8;
    
    img {
        height: 70px;
        align-self: start;
        margin-top: 5px;
    }
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

    position: relative;

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
        font-weight: 1000;
        color: #004BD8;
    }

    svg {
        width: 35px;
        height: 35px;

        color: #004BD8;

        position: absolute;
        bottom: 15px;
        right: 15px;

        cursor: pointer;
    }

    .small {
        width: 25px;
        height: 25px;

        bottom: 10px;
        right: 10px;
    }
`;

const OthersProductsContainer = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;

`;

const OtherProduct = styled.div`
    width: 48%;
    height: 270px;

    border-radius: 5px;
    background-color: #F1F1F1;

    padding: 10px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
        width: 150px;
        border-radius: 5px;
        object-fit: contain;
        background-color: white;
        overflow: hidden;
    }
`;

const FindProductBar = styled.div`
    position: relative;
    margin-bottom: 20px;

    svg {
        position: absolute;
        top: 13px;
        left: 13px;
        color: #757575;
    }
`;

const SearchBar = styled.input`
    height: 40px;
    width: 100%;

    background-color: #F1F1F1;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;

    padding: 10px 10px 10px 40px;
    font-size: 15px;
    line-height: 25px;
    color: black;
`;


import { useState, useEffect } from "react";
import styled from 'styled-components';
import ReactPlayer from "react-player";
import {
  BsSearch,
  BsFillCartPlusFill,
} from "react-icons/bs";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";

import Header from "../../components/HeaderComponents/header.js";
import video from "../../assets/videos/instagram-video.mp4";
import { addToCart, getProducts, getCart } from "../../services/api.js";
import useAuth from "../../hooks/useAuth.js";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("GERAL");
  const [cart, setCart] = useState([]);
  const [qtyItems, setQtylItems] = useState(0);
  const [changeCart, setChangeCart] = useState(0);
  const { auth } = useAuth();

  useEffect(() => {
    setIsLoading(true);
    const promise = getProducts();

    promise.then((response) => {
      setIsLoading(false);
      setProducts([...response.data]);
    });

    promise.catch((error) => {
      alert(`STATUS: ${error.response.statusText} (${error.response.status})
            
            ${error.response.data}
            `);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (auth !== null) {
      const promise = getCart(auth.token);

      promise.then((response) => {
        setCart(response.data[0].cart);
        getQtyItems(response.data[0].cart);
      });

      promise.catch((error) => {
        console.log(error);
      });
    }
  }, [changeCart, auth]);

  function getQtyItems(items) {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      sum += items[i].cartQTY;
    }
    setQtylItems(sum);
  }

  function searchFilterProducts(product) {
    if (searchTerm === "") {
      return product;
    } else if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return product;
    }

    return 0;
  }

  async function addItemToCart(e, id) {
    e.preventDefault();
    if (auth) {
      const promise = addToCart({ id }, auth.token);
      promise.then((res) => {
        setChangeCart(changeCart + 1);
      });
      promise.catch((err) => {
        alert("Faca login!");
        console.log(err);
      });
    } else {
      alert("Faca login!");
    }
  }

  function getItemQty(id) {
    const item = cart?.find( ( { _id } ) => _id === id);
    
    if (item) {
      return item.cartQTY;
    } else {
      return 0;
    }
  }

  return (
    <>
      {isLoading ? (
        <Loading>
          <p>Loading...</p>
          <TailSpin color="#00BFFF" height={80} width={80} />
        </Loading>
      ) : (
        <>
          <Header />
          <Container>
            <VideoContainer>
              <ReactPlayer
                url={video}
                playing={true}
                loop={true}
                controls={true}
                muted={true}
                playIcon={true}
                width="100%"
                height="100%"
              />
            </VideoContainer>

            <HighlightsContainer>
              <h1>Destaques</h1>
              <ProductsHilight>
                {products.map(
                  (product) =>
                    product.isHighLight === true && (
                      <ProductContainer>
                        <img alt={product.name} src={product.img} />

                        <Specs>
                          <h1>{product.name}</h1>
                          <p>R${product.price.toFixed(2).replace(".", ",")}</p>

                          <BsFillCartPlusFill
                            className="cartAdd"
                            onClick={(e) => addItemToCart(e, product._id)}
                          />

                          <div className="numberInCart">{getItemQty(product._id)}</div>
                        </Specs>
                      </ProductContainer>
                    )
                )}
              </ProductsHilight>
            </HighlightsContainer>

            <FindProductBar>
              <SearchBar
                type="search"
                placeholder="O que você está procurando?"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              <BsSearch />
            </FindProductBar>

            <NavBar typeFilter={typeFilter}>
              <div className="geral" onClick={() => setTypeFilter("GERAL")}>
                GERAL
              </div>

              <div className="pintura" onClick={() => setTypeFilter("PINTURA")}>
                PINTURA
              </div>

              <div
                className="eletrica"
                onClick={() => setTypeFilter("ELETRICA")}
              >
                ELÉTRICA
              </div>

              <div
                className="hidraulica"
                onClick={() => setTypeFilter("HIDRAULICA")}
              >
                HIDRÁULICA
              </div>
            </NavBar>

            <OthersProductsContainer>
              {products.length !== 0 &&
                products
                  .filter((product) =>
                    typeFilter !== "GERAL"
                      ? product.type === typeFilter.toLowerCase()
                      : product
                  )
                  .filter((product) => searchFilterProducts(product))
                  .map((product) => (
                    <OtherProduct>
                      <img alt={product.name} src={product.img} />

                      <Specs className="small">
                        <h1>{product.name}</h1>
                        <p>R${product.price.toFixed(2).replace(".", ",")}</p>

                        <BsFillCartPlusFill
                          className="cartAdd"
                          onClick={(e) => addItemToCart(e, product._id)}
                        />

                        <div className="numberInCart">{getItemQty(product._id)}</div>
                      </Specs>
                    </OtherProduct>
                  ))}
            </OthersProductsContainer>
          </Container>
          
          <Footer>
            <Link to="/cart">
                <BsFillCartFill/>
                <div>
                    {qtyItems}
                </div>
            </Link>
          </Footer>

        </>
      )}
    </>
  );
}

const Container = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  box-sizing: border-box;
  padding: 110px 10px;
  overflow-y: scroll;

  background-color: #fff;

  font-family: "Montserrat", sans-serif;
`;

const Loading = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  font-weight: 700;
  font-size: 20px;
  color: #00bfff;
`;

const VideoContainer = styled.div`
  max-width: 100% !important;
  height: auto !important;
  overflow: hidden;

  margin-bottom: 15px;
  padding-bottom: 20px;
  border-bottom: 2px solid #004bd8;

  video {
    border-radius: 15px;
  }
`;

const FindProductBar = styled.div`
  position: relative;
  margin-bottom: 5px;

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

  background-color: #f1f1f1;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 15px;

  padding: 10px 10px 10px 40px;
  font-size: 15px;
  line-height: 25px;
  color: #000;
`;

const NavBar = styled.div`
  width: 100%;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #757575;
  font-weight: 700;
  font-size: 14px;

  div {
    cursor: pointer;
  }

  .${({ typeFilter }) => typeFilter.toLowerCase()} {
    color: #004bd8;
    border-bottom: 3px solid #004bd8;
  }
`;

const HighlightsContainer = styled.div`
  height: 420px;
  display: flex;
  flex-direction: column;

  overflow: hidden;

  h1 {
    margin: 0;
    margin-bottom: 10px;
  }
`;

const ProductsHilight = styled.div`
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
  background-color: #fff;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  border-bottom: 3px groove #004bd8;

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
  justify-content: space-evenly;

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
    font-weight: 1000;
    color: #004bd8;
  }

  .cartAdd {
    width: 30px;
    height: 30px;

    color: #004bd8;

    position: absolute;
    bottom: 13px;
    right: 15px;
  }

  .numberInCart {
    width: 40px;
    height: 40px;

    border-radius: 50%;
    border: 1px solid #004bd8;
    background-color: #fff;
    color: #004bd8;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -230px;
    right: 0;
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
  max-width: 160px;
  height: 270px;

  border-radius: 5px;
  background-color: #f1f1f1;

  padding: 10px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 140px;
    border-radius: 5px;
    object-fit: contain;
    background-color: white;
    overflow: hidden;
  }

  .small {
    height: 50%;
    margin-top: 10px;

    h1 {
      display: block;
      overflow: scroll;
      height: 90px;
      margin-bottom: 0px;
    }

    svg {
      position: absolute;
      bottom: 4px;
      right: 0;
      width: 25px;
      height: 25px;
    }

    .numberInCart {
      width: 30px;
      height: 30px;

      border-radius: 50%;
      border: 1px solid #004bd8;
      background-color: #f1f1f1;
      color: #004bd8;
      font-weight: 700;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: -140px;
      right: -5px;
    }
  }
`;

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
    width: 25px;
    height: 25px;
    background-color: #3bb273;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 700;
  }
`;
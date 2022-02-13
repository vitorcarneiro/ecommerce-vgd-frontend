import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import ReactPlayer from "react-player";
import { BsPlusSquareFill, BsSearch } from "react-icons/bs";

import bigLogo from "../../assets/images/logo-meu-velho-completo.png";
import video from "../../assets/videos/instagram-video.mp4";

import { addToCart, getProducts } from "../../services/api.js";
import TokenContext from "../../contexts/tokenContext";
import axios from "axios";

export default function Home() {
  const { token } = useContext(TokenContext);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("GERAL");

  console.log(token);

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

  function typeFilterProducts(product) {
    if (typeFilter === "GERAL") {
      setFilteredProducts(...products);
    } else {
      setFilteredProducts(
        products.filter(
          (product) => product.type.toLowerCase() === typeFilter.toLowerCase()
        )
      );
    }
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
    console.log("token", token);

    axios
      .post(
        "http://ecommerce-vgd-backend.herokuapp.com/cart",
        {
          id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("worked", res);
      })
      .catch((err) => {
        console.log(err);
      });

    //  try {
    //    await addToCart(id, token).then((res) => {
    //      console.log(res);
    //    });
    //  } catch (err) {
    //    console.log(err);
    //  }
  }

  return (
    <Container>
      <TopBar>
        <img alt="logo" src={bigLogo} />
      </TopBar>

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
        <ProductsHilight hasData={products.length !== 0}>
          {products.length !== 0 &&
            products.map(
              (product) =>
                product.isHighLight === true && (
                  <ProductContainer>
                    <img alt={product.name} src={product.img} />

                    <Specs>
                      <h1>{product.name}</h1>
                      <p>{product.price.toFixed(2).replace(".", ",")}</p>

                      <BsPlusSquareFill
                        onClick={(e) => addItemToCart(e, product._id)}
                      />
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

        <div className="eletrica" onClick={() => setTypeFilter("ELETRICA")}>
          ELÉTRICA
        </div>

        <div className="hidraulica" onClick={() => setTypeFilter("HIDRAULICA")}>
          HIDRÁULICA
        </div>
      </NavBar>

      <OthersProductsContainer hasData={products.length !== 0}>
        {products.length !== 0 &&
          products
            .filter((product) => searchFilterProducts(product))
            .map((product) => (
              <OtherProduct>
                <img alt={product.name} src={product.img} />

                <Specs className="small">
                  <h1>{product.name}</h1>
                  <p>{product.price.toFixed(2).replace(".", ",")}</p>

                  <BsPlusSquareFill
                    onClick={(e) => addItemToCart(e, product._id)}
                  />
                </Specs>
              </OtherProduct>
            ))}
      </OthersProductsContainer>
    </Container>
  );
}
const TopBar = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  width: 100%;
  height: 90px;
  background-color: #fff;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);

  padding: 0 15px;
  box-sizing: border-box;

  display: flex;
  align-items: center;

  border-bottom: 2px solid #004bd8;

  img {
    height: 70px;
    align-self: start;
    margin-top: 5px;
  }
`;

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
    color: #004bd8;
  }

  svg {
    width: 35px;
    height: 35px;

    color: #004bd8;

    position: absolute;
    bottom: 15px;
    right: 15px;

    cursor: pointer;
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

    p {
      margin: 0;
      margin-top: -8px;
    }

    svg {
      width: 25px;
      height: 25px;

      bottom: 10px;
      right: 10px;
    }
  }
`;

import {
  Container,
  Header,
  Subtotal,
  Item,
  ItemsContainer,
  Footer,
  Button,
} from "../../components/CartComponents";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-meu-velho-completo.png";
import { IoLogIn } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../../contexts/tokenContext";
import { getCart } from "../../services/api.js";

export default function Cart() {
  const [userCart, setUserCart] = useState([]);
  const { token } = useContext(TokenContext);

  const confirmOrder = (e) => {
    e.preventDefault();
    alert("Pedido realizado");
  };

  useEffect(() => {
    const promise = getCart(token);

    promise.then((response) => {
      setUserCart([...response.data]);
    });

    promise.catch((error) => {
      console.log(error);
    });
  }, []);

  console.log(userCart);

  return (
    <>
      <Container>
        <Header>
          <div>
            <Link to="/">
              <img src={logo} alt="Home" />
            </Link>
            <Link to="/login">
              <IoLogIn color="black" size="50px" />
            </Link>
          </div>
          <div>
            <h1>Carrinho</h1>
            <p>40 itens</p>
            <Subtotal>
              <strong>$2500.00</strong>
            </Subtotal>
          </div>
        </Header>
        <ItemsContainer>
          <Item>
            <img
              src="https://www.palaciodasferramentas.com.br/uploads/produtos/full/82131606-2017-8-12-47-30.jpg"
              alt="item"
            />
            <p>Cabo Flexível com até 750V 2,5mm azul 100 metros Cobrecom</p>
            <span>
              <strong>R$ 29,90</strong>
            </span>
          </Item>
        </ItemsContainer>
        <Footer>
          <hr />
          <div>
            <p>Subtotal</p>
            <p>
              <strong>300</strong>
            </p>
          </div>
          <div>
            <p>Frete</p>
            <p>
              <strong>Gratis</strong>
            </p>
          </div>
          <hr />
          <div>
            <p>
              <strong>Total</strong>
            </p>
            <span>R$ 500,00</span>
          </div>
        </Footer>
        <Button onClick={confirmOrder}>Fazer pedido</Button>
      </Container>
    </>
  );
}

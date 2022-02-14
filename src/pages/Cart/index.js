import {
  Container,
  Header,
  Subtotal,
  Item,
  ItemsContainer,
  Footer,
  Button,
  EmptyCart,
} from "../../components/CartComponents";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-meu-velho-completo.png";
import { IoLogIn } from "react-icons/io5";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { getCart } from "../../services/api";

export default function Cart() {
  const [userCart, setUserCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState(0);
  const { auth } = useAuth();

  const navigate = useNavigate();

  function checkout(e) {
    navigate("/checkout");
  }
  useEffect(() => {
    if (auth !== null) {
      const promise = getCart(auth.token);

      promise.then((response) => {
        setUserCart(response.data);
        getTotal(response.data[0].cart);
      });

      promise.catch((error) => {
        console.log(error);
      });
    }
  }, []);

  function getTotal(items) {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      sum += items[i].price;
    }
    setItems(items.length);
    setTotal(parseFloat(sum).toFixed(2));
  }

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
            <p>{items} itens</p>
            <Subtotal>
              <strong>R${total}</strong>
            </Subtotal>
          </div>
        </Header>
        {userCart.length === 0 ? (
          <EmptyCart>
            <p>Seu carrinho esta vazio...</p>
          </EmptyCart>
        ) : (
          <>
            <ItemsContainer>
              {userCart[0].cart.map((cartItem) => (
                <Item key={cartItem._id}>
                  <img src={cartItem.img} alt="item" />
                  <p>{cartItem.name}</p>
                  <span>
                    <strong>R${cartItem.price}</strong>
                  </span>
                </Item>
              ))}
            </ItemsContainer>
            <Footer>
              <hr />
              <div>
                <p>Subtotal</p>
                <p>
                  <strong>{total}</strong>
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
                <span>R$ {total}</span>
              </div>
            </Footer>
            <Button onClick={() => checkout()}>Checkout</Button>
          </>
        )}
      </Container>
    </>
  );
}

import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
//const BASE_URL = "https://ecommerce-vgd-backend.herokuapp.com";

function signIn(body) {
  return axios.post(`${BASE_URL}/sign-in`, body);
}

function signUp(body) {
  return axios.post(`${BASE_URL}/sign-up`, body);
}

function getProducts() {
  return axios.get(`${BASE_URL}/products`);
}

function addToCart(token, id) {
  return axios.post(
    `${BASE_URL}/cart`,
    { id: id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

function getCart(token) {
  return axios.get(`${BASE_URL}/cart`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export { signIn, signUp, getProducts, addToCart, getCart };
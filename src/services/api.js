import axios from "axios";

//const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const BASE_URL = "http://ecommerce-vgd-backend.herokuapp.com";

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function signIn(body) {
  return axios.post(`${BASE_URL}/sign-in`, body);
}

function signUp(body) {
  return axios.post(`${BASE_URL}/sign-up`, body);
}

function getProducts() {
  return axios.get(`${BASE_URL}/products`);
}

function addToCart(body, token) {
  const config = createConfig(token);
  return axios.post(`${BASE_URL}/cart`, body, config);
}

function getCart(token) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/cart`, config);
}

function userCheckout(body, token) {
  const config = createConfig(token);
  return axios.post(`${BASE_URL}/checkout`, body, config);
}

export { signIn, signUp, getProducts, addToCart, getCart, userCheckout };

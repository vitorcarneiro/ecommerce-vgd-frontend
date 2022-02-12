import axios from "axios";

const BASE_URL = "https://ecommerce-vgd-backend.herokuapp.com";

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

export { signIn, signUp, getProducts, addToCart };

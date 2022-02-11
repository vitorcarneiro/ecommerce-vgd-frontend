import axios from "axios";

const BASE_URL = "https://ecommerce-vgd-backend.herokuapp.com";

function signIn(body) {
  return axios.post(`${BASE_URL}/sign-in`, body);
}

function signUp(body) {
  return axios.post(`${BASE_URL}/sign-up`, body);
}

function getProducts() {
  return axios.get(`${BASE_URL}/products`);
}

export { signIn, signUp, getProducts };

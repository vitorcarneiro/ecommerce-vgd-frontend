import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

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

import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  Input,
} from "../../components/FormComponents";
import useAuth from "../../hooks/useAuth.js";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Checkout() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const [addressData, setAddressData] = useState({
    rua: "",
    cep: "",
    numero: "",
    complemento: "",
    cidade: "",
    bairro: "",
    estado: "",
  });

  useEffect(() => {
    if (!auth) {
      navigate("/cart");
    }
  });

  console.log(addressData);

  async function checkout(e) {
    e.preventDefault();

    axios
      .post(
        "http://ecommerce-vgd-backend.herokuapp.com/checkout",
        {
          addressData,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((res) => {
        console.log("Endereco registrado!", res);
        alert("Obrigado por comprar conosco! Volte Sempre! ");
        navigate("/");
      })
      .catch((err) => {
        alert("Erro! Faça login novamente!");
        navigate("/cart");
      });
  }

  function handleChange(e) {
    setAddressData({ ...addressData, [e.target.name]: e.target.value });
  }

  console.log(addressData);

  return (
    <>
      <Container>
        <h2>Endereço de entrega</h2>
        <Form onSubmit={checkout}>
          <Input
            type="text"
            name="rua"
            placeholder="Rua"
            value={addressData.rua}
            onChange={handleChange}
            required
          />
          <Input
            type="number"
            name="numero"
            placeholder="Número"
            value={addressData.numero}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="complemento"
            placeholder="Complemento"
            value={addressData.complemento}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="bairro"
            placeholder="Bairro"
            value={addressData.bairro}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="cidade"
            placeholder="Cidade"
            value={addressData.cidade}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="estado"
            placeholder="Estado"
            value={addressData.estado}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="cep"
            placeholder="CEP"
            value={addressData.cep}
            onChange={handleChange}
            required
          />
          <Button type="submit">Finalizar Pedido</Button>
        </Form>
      </Container>
    </>
  );
}

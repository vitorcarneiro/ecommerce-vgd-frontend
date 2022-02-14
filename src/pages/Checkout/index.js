import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  Input,
} from "../../components/FormComponents";
import useAuth from "../../hooks/useAuth.js";
import { useNavigate } from "react-router";
import { userCheckout } from "../../services/api";

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

  async function checkout(e) {
    e.preventDefault();

    const promise = userCheckout({ addressData }, auth.token);
    promise.then(() => {
      console.log("Endereco registrado!");
      alert("Obrigado por comprar conosco! Volte Sempre! ");
      navigate("/");
    });
    promise.catch(() => {
      alert("Erro! Faça login novamente!");
      navigate("/cart");
    });
  }

  function handleChange(e) {
    setAddressData({ ...addressData, [e.target.name]: e.target.value });
  }

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

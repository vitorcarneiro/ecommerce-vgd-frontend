import { useState } from "react";
import {
  Button,
  Container,
  Form,
  Input,
} from "../../components/FormComponents";
import logo from "../../assets/images/logo-meu-velho-rosto.png";

export default function Checkout() {
  const [formData, setFormData] = useState({
    rua: "",
    cep: "",
    numero: "",
    complemento: "",
    cidade: "",
    bairro: "",
    estado: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  console.log(formData);

  return (
    <>
      <Container>
        <h2>Endereço de entrega</h2>
        <Form>
          <Input
            type="text"
            name="rua"
            placeholder="Rua"
            value={formData.rua}
            onChange={handleChange}
            required
          />
          <Input
            type="number"
            name="numero"
            placeholder="Número"
            value={formData.numero}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="complemento"
            placeholder="Complemento"
            value={formData.complemento}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="bairro"
            placeholder="Bairro"
            value={formData.bairro}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="cidade"
            placeholder="Cidade"
            value={formData.cidade}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="estado"
            placeholder="Estado"
            value={formData.estado}
            onChange={handleChange}
            required
          />
          <Input
            type="number"
            name="cep"
            placeholder="CEP"
            value={formData.cep}
            onChange={handleChange}
            required
          />
          <Button type="submit">Finalizar Pedido</Button>
        </Form>
      </Container>
    </>
  );
}

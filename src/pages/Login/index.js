import {
  Button,
  Container,
  Form,
  Input,
  StyledLink,
} from "../../components/FormComponents";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { signIn } from "../../services/api.js";
import useAuth from "../../hooks/useAuth.js";
import logo from "../../assets/images/logo-meu-velho-rosto.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const { storeLogin } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const promise = await signIn({ email, password });
      storeLogin(promise.data);
      navigate("/");

    } catch(err) {
      setLoginError(true);
      console.log(err.data);
      setInterval(() => {
        setLoginError(false);
      }, 2000);

    }
  }
  return (
    <>
      <Container>
        <img src={logo} alt="logo" />
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="button" onClick={handleSubmit} enabled={!loginError}>
            Entrar
          </Button>
        </Form>
        <span>
          Não tem uma conta? <StyledLink to="/register">Cadastre-se</StyledLink>
        </span>
      </Container>
    </>
  );
}

import { Container } from "@mui/material";
import React from "react";
import LoginForm from "../../components/loginForm/LoginForm";

const LoginPage: React.FunctionComponent = () => (
  <Container maxWidth="sm">
    <LoginForm />
  </Container>
);
export default LoginPage;

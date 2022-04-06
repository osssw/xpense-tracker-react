import { Container } from "@mui/material";
import React from "react";
import LoginForm from "../../components/loginForm/LoginForm";

const LoginPage: React.FunctionComponent = () => (
  <Container maxWidth="sm" sx={{ p: 0 }}>
    <LoginForm />
  </Container>
);
export default LoginPage;

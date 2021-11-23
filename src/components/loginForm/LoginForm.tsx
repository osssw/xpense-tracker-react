import React from "react";
import Stack from "@mui/material/Stack";
import { Button, Paper, TextField } from "@mui/material";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./loginForm.scss";

const LoginForm: React.FunctionComponent = () => {
  const { loginUser } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    await loginUser({ email, password });
    navigate("/profile");
  };

  return (
    <Paper className="login-form-container" elevation={3}>
      <Stack spacing={2}>
        <TextField
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          type="email"
        />
        <TextField
          type="password"
          onChange={handlePasswordChange}
          value={password}
          placeholder="Password"
        />
        <Button
          variant="contained"
          onClick={handleFormSubmit}
          className="login-form-container__submit-button"
        >
          Click
        </Button>
      </Stack>
    </Paper>
  );
};

export default LoginForm;

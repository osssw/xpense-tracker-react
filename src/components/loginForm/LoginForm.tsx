import React from "react";
import Stack from "@mui/material/Stack";
import { Button, LinearProgress, Paper, TextField } from "@mui/material";
import { AuthContext } from "../../provider/Auth";
import { useNavigate } from "react-router-dom";
import "./loginForm.scss";

const LoginForm: React.FunctionComponent = () => {
  const { loginUser } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isLoading, setLoading] = React.useState<boolean>(false);

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
    setLoading(true);
    try {
      await loginUser({ email, password });
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
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
        {isLoading ? (
          <LinearProgress />
        ) : (
          <Button
            variant="contained"
            onClick={handleFormSubmit}
            className="login-form-container__submit-button"
          >
            Click
          </Button>
        )}
      </Stack>
    </Paper>
  );
};

export default LoginForm;

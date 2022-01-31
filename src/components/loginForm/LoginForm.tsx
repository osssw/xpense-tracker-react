import React from "react";
import Stack from "@mui/material/Stack";
import { Button, LinearProgress, Paper, TextField } from "@mui/material";
import { AuthContext } from "../../provider/Auth";
import { useNavigate } from "react-router-dom";
import Error from "../common/error/Error";
import "./loginForm.scss";
import ContainedButton from "../common/button/Button";

const LoginForm: React.FunctionComponent = () => {
  const { loginUser } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [isError, setError] = React.useState<boolean>(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
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
      setError(true);
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
          <ContainedButton onClick={handleFormSubmit}>Click</ContainedButton>
        )}
        {isError && <Error text="Wrong email or password" />}
        )}
      </Stack>
    </Paper>
  );
};

export default LoginForm;

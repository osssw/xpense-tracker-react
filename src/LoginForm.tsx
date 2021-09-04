import React from "react";

const LoginForm: React.FunctionComponent = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("form submit", email, password);
  };

  return (
    <form>
      <input
        type="email"
        onChange={handleEmailChange}
        value={email}
        placeholder="Email"
      />
      <input
        type="password"
        onChange={handlePasswordChange}
        value={password}
        placeholder="Password"
      />
      <button onClick={handleFormSubmit}>Click</button>
    </form>
  );
};

export default LoginForm;

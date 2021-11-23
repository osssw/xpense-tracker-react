import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import { AuthContext } from "./provider/AuthProvider";

const App: React.FunctionComponent = () => {
  const { isAuthorized } = React.useContext(AuthContext);
  return (
    <Router>
      <Routes>
        {isAuthorized && <Route path="/profile" element={<ProfilePage />} />}
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;

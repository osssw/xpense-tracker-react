import { Container } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTransactionPage from "./pages/addTransaction/AddTransactionPage";
import LoginPage from "./pages/login/LoginPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import ProfilePage from "./pages/profile/ProfilePage";
import { AuthContext } from "./provider/Auth";

const App: React.FunctionComponent = () => {
  const { isAuthorized } = React.useContext(AuthContext);
  return (
    <Container fixed>
      <Router>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/"
            element={
              !isAuthorized ? <LoginPage /> : <Navigate to="/profile" />
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <ProfilePage />
              </RequireAuth>
            }
          />
          <Route
            path="add_transaction"
            element={
              <RequireAuth>
                <AddTransactionPage />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </Container>
  );
};

const RequireAuth: React.FunctionComponent = ({ children }) => {
  const { isAuthorized } = React.useContext(AuthContext);
  return <>{isAuthorized ? children : <Navigate to="/" />}</>;
};

export default App;

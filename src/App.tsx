import React from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/loginPage";
import NotFoundPage from "./pages/notFound/notFoundPage";
import ProfilePage from "./pages/profile/profilePage";
import { AuthContext } from "./provider/auth";

const App: React.FunctionComponent = () => {
  const { isAuthorized } = React.useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/"
          element={!isAuthorized() ? <LoginPage /> : <Navigate to="/profile" />}
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
};

const RequireAuth: React.FunctionComponent = ({ children }) => {
  const { isAuthorized } = React.useContext(AuthContext);
  return <>{isAuthorized() ? children : <Navigate to="/" />}</>;
};

export default App;

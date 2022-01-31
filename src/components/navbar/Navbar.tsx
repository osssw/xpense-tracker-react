import React from "react";
import AppBar from "@mui/material/AppBar";
import { IconButton, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./navbar.scss";
import { AuthContext } from "../../provider/Auth";
import { useNavigate } from "react-router-dom";

const Navbar: React.FunctionComponent = () => {
  const { logoutUser } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const handleHome = () => {
    navigate("/profile");
  };

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="navbar__toolbar">
        <Typography
          variant="h6"
          component="div"
          onClick={handleHome}
          className="navbar__home"
        >
          XPENSE TRACKER
        </Typography>
        <IconButton onClick={handleLogout}>
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

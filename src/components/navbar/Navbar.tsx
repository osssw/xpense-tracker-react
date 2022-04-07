import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, IconButton, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddIcon from "@mui/icons-material/Add";
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

  const handleAddTransactionClick = () => {
    navigate("/add_transaction");
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
        <Box>
          <IconButton onClick={handleAddTransactionClick}>
            <AddIcon />
          </IconButton>
          <IconButton onClick={handleLogout}>
            <ExitToAppIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

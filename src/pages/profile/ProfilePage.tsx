import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Container, IconButton, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./profilePage.scss";
import { AuthContext } from "../../provider/Auth";
import { useNavigate } from "react-router-dom";

const ProfilePage: React.FunctionComponent = () => {
  const { logoutUser } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div className="profile-page">
      <AppBar position="fixed">
        <Toolbar className="profile-page__toolbar">
          <Typography variant="h6" component="div">
            XPENSE TRACKER
          </Typography>
          <IconButton onClick={handleLogout}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ mt: 10 }}>text</Box>
      </Container>
    </div>
  );
};

export default ProfilePage;

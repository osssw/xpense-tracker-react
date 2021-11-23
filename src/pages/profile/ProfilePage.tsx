import React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

const ProfilePage: React.FunctionComponent = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div">
          Hello!
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ProfilePage;

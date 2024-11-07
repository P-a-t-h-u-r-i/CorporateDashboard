import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import '../index.css';

const Header = () => (
  <AppBar position="static" className="header">
    <Toolbar className="MuiToolbar-root">
      <Typography variant="h6" className="MuiTypography-root">
        Corporate Dashboard
      </Typography>
      <div>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
);

export default Header;

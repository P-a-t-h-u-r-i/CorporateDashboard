import React from 'react';
import { Button, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import '../index.css';

const Sidebar = () => (
  <div className="sidebar">
    <h2>Dashboard</h2>
    <List>
      <ListItem>
        <Button component={Link} to="/" variant="outlined">
          Schedule
        </Button>
      </ListItem>
      <ListItem>
        <Button component={Link} to="/calendar" variant="outlined">
          Scheduled Interviews
        </Button>
      </ListItem>
      <ListItem>
        <Button component={Link} to="/domain-selection" variant="outlined">
          Domain Selection
        </Button>
      </ListItem>
    </List>
  </div>
);

export default Sidebar;

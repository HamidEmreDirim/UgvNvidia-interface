import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './SideBar.css'; // For any custom styling you might want to keep

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#232D3F',
          color: '#d2f7d2',
        },
      }}
    >
      <Typography variant="h6" component="div" sx={{ padding: '16px', color: '#008170' }}>
        Navigator
      </Typography>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Control" />
        </ListItem>
        <ListItem button component={Link} to="/map">
          <ListItemText primary="Map" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './SideBar.css'; // For any custom styling
import logo from './images/cisp_logo.jpg';

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
          backgroundColor: '#1C2530',  // Darker modern color
          color: '#E0E0E0',            // Lighter text color
        },
      }}
    >
      <Typography variant="h6" component="div" sx={{ padding: '16px', color: '#00A676' }}>
        Navigator
      </Typography>
      
      {/* Logo Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'left',
          padding: '20px',
        }}
      >
        <img src={logo} alt="Logo" style={{ width: '100px' }} />
      </Box>
      
      <List>
        <ListItem button component={Link} to="/" sx={{ '&:hover': { backgroundColor: '#00A676' } }}>
          <ListItemText primary="Control" sx={{ color: '#E0E0E0' }} />
        </ListItem>
        <ListItem button component={Link} to="/map" sx={{ '&:hover': { backgroundColor: '#00A676' } }}>
          <ListItemText primary="Map" sx={{ color: '#E0E0E0' }} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

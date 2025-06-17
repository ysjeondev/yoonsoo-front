import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, useTheme, useMediaQuery, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#A8D5BA',
          color: '#ecf0f1'
        },
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          My Menu
        </Typography>
      </Toolbar>
        <List>
          <ListItem button component={Link} to="/main/home">
            <ListItemIcon sx={{ color: '#ecf0f1' }}><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" sx={{ color: '#ecf0f1' }} />
          </ListItem>

          <ListItem button component={Link} to="/main/about">
            <ListItemIcon sx={{ color: '#ecf0f1' }}><InfoIcon /></ListItemIcon>
            <ListItemText primary="About" sx={{ color: '#ecf0f1' }} />
          </ListItem>

          <ListItem button component={Link} to="/main/contact">
            <ListItemIcon sx={{ color: '#ecf0f1' }}><ContactMailIcon /></ListItemIcon>
            <ListItemText primary="Contact" sx={{ color: '#ecf0f1' }} />
          </ListItem>
        </List>
    </Drawer>
  );
};

export default Sidebar;

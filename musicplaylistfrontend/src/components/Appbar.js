import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Appbar() {
  return (
    <Box 
    sx={{ 
      flexGrow: 1,
      backgroundColor: '#102937'
      }}>
      <AppBar
      sx={{ 
        backgroundColor: '#102937'
        }} 
      position="static">
        <Toolbar>
          <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1,
            backgroundColor: '#102937'}}>
            Music List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

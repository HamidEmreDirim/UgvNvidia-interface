import React, { useEffect } from 'react';
import nipplejs from 'nipplejs';
import { Box } from '@mui/material';

const Joystick = ({ sendControlData }) => {
  useEffect(() => {
    const manager = nipplejs.create({
      zone: document.getElementById('joystick-zone'),
      mode: 'static',
      position: { left: '50%', top: '50%' },  // Ensures it stays centered
      color: 'blue',
      size: 150,
    });

    manager.on('move', (evt, data) => {
      if (data) {
        const { x, y } = data.vector;
        sendControlData({ x, y });
      }
    });

    return () => {
      manager.destroy();
    };
  }, [sendControlData]);

  return (
    <Box
      id="joystick-zone"
      sx={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        backgroundColor: '#232D3F',
        border: '2px solid #008170',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
      }}
    />
  );
};

export default Joystick;

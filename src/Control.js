import React from 'react';
import { Typography } from '@mui/material';
import VideoStream from './VideoStream';
import Joystick from './JoyStick';

const Control = () => {
  const sendControlData = (data) => {
    console.log('Joystick data:', data);
  };

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '40px', marginLeft: '0px', alignItems: 'center' }}>
      {/* Video Streams Section */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        {/* Thermal Camera Stream with Thin Border */}
        <div
          style={{
            width: '400px',
            border: '2px solid #008170',  // Thin green border
            backgroundColor: '#0F0F0F',   // Ensures dark background
            borderRadius: '8px',
          }}
        >
          <Typography variant="h6" component="div" style={{ color: '#008170', textAlign: 'center' }}>
            Thermal Camera Stream
          </Typography>
          <VideoStream streamType="thermal" />
        </div>

        {/* RGB Camera Stream with Thin Border */}
        <div
          style={{
            width: '400px',
            border: '2px solid #008170',  // Thin green border
            backgroundColor: '#0F0F0F',   // Ensures dark background
            borderRadius: '8px',
          }}
        >
          <Typography variant="h6" component="div" style={{ color: '#008170', textAlign: 'center' }}>
            RGB Camera Stream
          </Typography>
          <VideoStream streamType="rgb" />
        </div>
      </div>

      {/* Custom Vertical Divider */}
      <div
        style={{
          width: '4px',               // Thin vertical line
          height: '90%',              // Take 90% of the parent container height
          backgroundColor: '#008170', // Green color for the divider
          marginLeft: '20px',
          marginRight: '20px',
        }}
      />

      {/* Joystick Section */}
      <Joystick sendControlData={sendControlData} />
    </div>
  );
};

export default Control;

import React from 'react';
import VideoStream from './VideoStream';
import Joystickv2 from './JoyStick';
import { Container, Col, Row, Card } from 'react-bootstrap'

const Control = () => {
  const sendControlData = (data) => {
    console.log('Joystick data:', data);
  };

  return (
    <>
      <Container>
        <Row style={{ display: 'flex', alignItems: 'center'}}>
          <Col xl={9} style={{ display: 'flex', flexDirection: 'row' }}>
            <Card style={{ width: '100%', marginRight: '20px' }}>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>Thermal Camera Stream</Card.Title>
                <VideoStream streamType="thermal" />
              </Card.Body>
            </Card>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>RGB Camera Stream</Card.Title>
                <VideoStream streamType="rgb" />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3}>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
              <Joystickv2 sendControlData={sendControlData} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Control;

{/* 

<div style={{ display: 'flex', gap: '20px', padding: '40px', marginLeft: '0px', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
  <div style={{ width: '400px', border: '2px solid #008170', backgroundColor: '#0F0F0F', borderRadius: '8px' }}>
    <Typography variant="h6" component="div" style={{ color: '#008170', textAlign: 'center' }}>
      Thermal Camera Stream
    </Typography>
    <VideoStream streamType="thermal" />
  </div>

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

<div
  style={{
    width: '4px',               // Thin vertical line
    height: '90%',              // Take 90% of the parent container height
    backgroundColor: '#008170', // Green color for the divider
    marginLeft: '20px',
    marginRight: '20px',
  }}
/>

<Joystick sendControlData={sendControlData} />
</div> */}
import React, { useState, useEffect } from 'react';
import VideoStream from './VideoStream';
import Joystickv2 from './JoyStick';
import { Container, Col, Row, Card } from 'react-bootstrap';
import CustomMarks from './CustomMarks'; // Import the Slider component
import TemperatureChart from './TemperatureChart'; // Import the new chart component
import GyroscopeDisplay from './GyroscopeDisplay'; // Import the gyroscope display

const Control = () => {
  const sendControlData = (data) => {
    console.log('Joystick data:', data);
  };

  // Simulated gyroscope data (replace this with actual sensor data)
  const [gyroData, setGyroData] = useState({ x: 0, y: 0, z: 0 });

  // Example of updating gyroscope data (you would replace this with real sensor data logic)
  useEffect(() => {
    const interval = setInterval(() => {
      setGyroData({
        x: Math.random() * 2 * Math.PI,  // Simulated roll
        y: Math.random() * 2 * Math.PI,  // Simulated pitch
        z: Math.random() * 2 * Math.PI,  // Simulated yaw
      });
    }, 1000);  // Update every second (adjust based on sensor frequency)
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container>
        <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Col xl={9} style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Video Streams Section */}
            <Row style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
              <Col style={{ flex: 1 }}>
                <Card style={{ marginRight: '20px' }}>
                  <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Thermal Camera Stream</Card.Title>
                    <VideoStream streamType="thermal" />
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{ flex: 1 }}>
                <Card>
                  <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>RGB Camera Stream</Card.Title>
                    <VideoStream streamType="rgb" />
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Temperature Chart and Gyroscope Display in the Same Row */}
            <Row style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'space-between' }}>
              <Col style={{ flex: 1 }}>
                <Card style={{ height: '240px' }}>
                  <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Temperature</Card.Title>
                    {/* Pass dynamic width and height to the chart */}
                    <TemperatureChart width="370px" height="200px" />
                  </Card.Body>
                </Card>
              </Col>

              <Col style={{ flex: 1 }}>
                <Card style={{ height: '240px' }}>
                  <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Orientation</Card.Title>
                    {/* Display 3D model based on gyroscope data */}
                    <GyroscopeDisplay gyroData={gyroData} />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          {/* Joystick and Slider Section */}
          <Col xl={3}>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <Joystickv2 sendControlData={sendControlData} />
              
              {/* Slider under Joystick */}
              <div style={{ marginTop: '20px' }}>
                <CustomMarks />  {/* This renders the slider */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Control;

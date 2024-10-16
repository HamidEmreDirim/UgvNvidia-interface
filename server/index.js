const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('User connected');

  // Stream thermal and RGB video data
  fs.watchFile('/path/to/thermal/video', (curr, prev) => {
    fs.readFile('/path/to/thermal/video', (err, data) => {
      if (!err) {
        socket.emit('thermal', data);
      }
    });
  });

  fs.watchFile('/path/to/rgb/video', (curr, prev) => {
    fs.readFile('/path/to/rgb/video', (err, data) => {
      if (!err) {
        socket.emit('rgb', data);
      }
    });
  });

  // Handle joystick input
  socket.on('joystick-data', (data) => {
    console.log('Joystick data received:', data);
    // Send commands to robot
  });
});

server.listen(5000, () => {
  console.log('Server running on port 5000');
});

const express = require('express');
const SerialPort = require('serialport');
const app = express();
const port = new SerialPort('COM3', { baudRate: 9600 }); // Adjust COM port
let motorState = 'off';

app.get('/motor/:state', (req, res) => {
  const state = req.params.state;
  if (state === 'on') {
    port.write('ON\n');
    motorState = 'on';
    res.send('Motor turned ON');
  } else if (state === 'off') {
    port.write('OFF\n');
    motorState = 'off';
    res.send('Motor turned OFF');
  } else {
    res.send('Invalid command');
  }
});

app.get('/motor/status', (req, res) => {
  res.send(motorState);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

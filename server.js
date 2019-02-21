const express = require('express');
const cohortsRoute = require('./data/routes/cohortsRoute');
const studentsRoute = require('./data/routes/studentsRoute');
const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.send('<h1>Server is working</h1>');
});

server.use('/api/cohorts', cohortsRoute);

server.use('/api/students', studentsRoute);
module.exports = server;

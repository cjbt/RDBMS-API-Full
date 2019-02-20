const express = require('express');
const cohortsRoute = require('./data/routes/cohortsRoute');
const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.send('<h1>Server is working</h1>');
});

server.use('/api/cohorts', cohortsRoute);
module.exports = server;

const express = require('express');
const db = require('../dbConfig');
const route = express.Router();

// post new cohorts

route.post('/', (req, res) => {
  const body = req.body;
  db('cohorts')
    .insert(body)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(500).json({ message: 'you need a name', err });
    });
});

// get all

route.get('/', (req, res) => {
  db('cohorts')
    .then(cohorts => {
      res.status(200).json(cohorts);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// get by id

route.get('/:id', (req, res) => {
  const id = req.params.id;
  db('cohorts')
    .where({ id })
    .first()
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: 'id does not exist' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// get all students from specified cohort

route.get('/:id/students', (req, res) => {
  const id = req.params.id;
  db('cohorts').where();
});

// put, update cohort with matching id

route.put('/:id', (req, res) => {
  const id = req.params.id;
  db('cohorts')
    .where({ id })
    .update()
    .then()
    .catch();
});

// delete specific cohort by id

route.delete('/:id', (req, res) => {
  const id = req.params.id;
  db('cohorts')
    .where({ id })
    .del()
    .then()
    .catch();
});

module.exports = route;

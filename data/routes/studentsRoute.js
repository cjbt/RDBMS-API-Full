const express = require('express');
const db = require('../dbConfig');
const route = express.Router();

// post to student route
route.post('/', (req, res) => {
  const { name, cohort_id } = req.body;
  if (!name || !cohort_id) {
    res
      .status(400)
      .json({ message: 'You need a name and cohort id there bud' });
  } else {
    db('students')
      .insert({ name, cohort_id })
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
});
// get return array of all students
route.get('/', (req, res) => {
  db('students')
    .then(students => {
      res.status(200).json(students);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
// get student by id
route.get('/:id', (req, res) => {
  const id = req.params.id;
  db('students')
    .join('cohorts', 'cohorts.id', 'students.cohort_id')
    .select('students.id', 'students.name as name', 'cohorts.name as cohort')
    .where('students.id', id)
    .then(ids => {
      if (ids) {
        res.status(200).json(ids);
      } else {
        res.status(404).json({ message: 'wrong id there bud' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
// put, update student by id
route.put('/:id', (req, res) => {
  const id = req.params.id;
  const { name, cohort_id } = req.body;
});
// delete student by id
route.delete('/:id', (req, res) => {});

module.exports = route;

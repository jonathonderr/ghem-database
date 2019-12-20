/* eslint-disable func-names */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const { Alert } = require('../models/models.js');

const router = express.Router();

router.get('/', (req, res) => {
  Alert.find({}, (err, alerts) => {
    const alertMap = {};

    alerts.forEach((alert) => {
      alertMap[alert.date.toLocaleDateString('en-US')] = {
        title: alert.title,
        message: alert.message,
        status: alert.status,
      };
    });

    res.send(alertMap);
  });
});

router.post('/', (req, res) => {
  const alert = new Alert({
    title: req.body.title,
    message: req.body.message,
    status: req.body.status,
    date: Date.now(),
  });

  // eslint-disable-next-line prefer-arrow-callback
  alert.save().then(function () {
    res.send(alert);
  });
});

router.put('/:id', (req, res) => {
  Alert.updateOne({ _id: req.params.id }, { $set: req.body }).then((result) => {
    res.send(result);
  });
});

router.delete('/:id', (req, res) => {
  Alert.deleteOne({ _id: req.params.id }).then((result) => {
    res.send(result);
  });
});

module.exports = router;

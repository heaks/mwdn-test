const express = require('express');
const router = express.Router();

const twilio = require('./twilioClient');

const link = 'https://heaks.github.io/mwdn-camera/';

const NUMBER = process.env.NUMBER;

router.get('/test', (req, res) => {
  res.status(200);
  res.send('Sms server works');
});

router.post('/send', (req, res) => {
  const { sendTo } = req.body;
  
  twilio.messages.create({
    body: link,
    to: sendTo,
    from: NUMBER,
  })
    .then(message => {
      res.send({ message, status: 200 });
    })
    .catch((err) => {
      console.log('ERROR:', err);
      res.send(err);
    });
});

module.exports = router;

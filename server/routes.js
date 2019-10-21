const express = require('express');
const router = express.Router();

const twilio = require('./twilioClient');

const link = 'https://heaks.github.io/mwdn-camera/';

router.get('/test', (req, res) => {
  res.send('Sms server works');
});

router.post('/send', (req, res) => {
  const { sendTo } = req.body;
  
  twilio.messages.create({
    body: link,
    to: sendTo,
    // from: '+180225410701234',
    from: '+18022541070',
  })
    .then(message => {
      res.send({ message, status: 200 });
    })
    .catch((err) => {
      console.log('Something bad happened:', err);
      res.send(err);
    });
});

module.exports = router;

const twilio = require('twilio');

const SID = process.env.SID;
const TOKEN = process.env.TOKEN;

const client = new twilio(SID, TOKEN);

module.exports = client;
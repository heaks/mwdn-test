const twilio = require('twilio');

const SID = 'ACcba98b3f849d2ca4f9f59e3ee13f6dc5';
const TOKEN = '71031a985f9c063533172ee2dc610a43';

// const SID = process.env.SID;
// const TOKEN = process.env.TOKEN;

const client = new twilio(SID, TOKEN);

module.exports = client;
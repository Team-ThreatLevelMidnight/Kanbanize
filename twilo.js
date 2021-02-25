const client = require('twilio')(accountSid, authToken);
const zoom = require('./config'); /// for getting MSG wit url

client.messages
  .create({
     from: 'whatsapp:+14155238886',
     body: ``,
     to: 'whatsapp:+15017122661'
   })
  .then(message => console.log(message.sid));
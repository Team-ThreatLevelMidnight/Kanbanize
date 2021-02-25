const client = require('twilio')(accountSid, authToken);
const zoom = require('./config'); /// for getting MSG wit url

function send(meetingURL) {
  client.messages.create({
    from: 'whatsapp:+14155238886',
    body: "Don't forget that you have a Zoom meeting to attend in 5 minutes! Find the meeting link here: "+meetingURL,
    to: 'whatsapp:+15017122661'
  }).then(message => console.log(message.sid));
}

module.exports = send;

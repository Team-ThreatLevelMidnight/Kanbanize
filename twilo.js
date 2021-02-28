const zoom = require('./config/config'); /// for getting MSG wit url
const client = require('twilio')(zoom.accountSid, zoom.authToken);

 function send(meetingURL) {
  client.messages.create({
    from: 'whatsapp:+14155238886', 
    body: "Don't forget that you have a Zoom meeting to attend in 5 minutes! Find the meeting link here: "+meetingURL,
    to: '' //Enter the target phone number
  }).then(message => console.log(message.sid));
}

module.exports.send=send;


const mailgun = require('mailgun-js');


async function sendEmail(meetingURL) {

var API_KEY = ''; 
var DOMAIN = ''; 
var mailgun = require('mailgun-js') ({apiKey: API_KEY, domain: DOMAIN}); 


const data = { 
	"from": "notification@kanbanize.com", 
	"to": "haran465@gmail.com", 
	"subject": "hello", 
	"text": "Don't forget that you have a Zoom meeting to attend in 5 minutes! Find the meeting link here: "+meetingURL 
}; 
	
mailgun.messages().send(data, (error, body) => { 
	if(error) console.log(error) 
	else console.log(body); 
}); 
} 


module.exports.sendEmail=sendEmail;

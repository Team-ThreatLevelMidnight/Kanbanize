
const mailgun = require('mailgun-js');


async function sendEmail(receiver_email,email_subject,email_body) {

var API_KEY = '370f0582a596f401033634996319df87-6e0fd3a4-86de9cfe'; 
var DOMAIN = 'test.scoopml.app'; 
var mailgun = require('mailgun-js') ({apiKey: API_KEY, domain: DOMAIN}); 

sendMail = function(sender_email, reciever_email, 
		email_subject, email_body){ 

const data = { 
	"from": sender_email, 
	"to": reciever_email, 
	"subject": email_subject, 
	"text": email_body 
}; 
	
mailgun.messages().send(data, (error, body) => { 
	if(error) console.log(error) 
	else console.log(body); 
}); 
} 

var sender_email = 'mailnotifier@kanbanize.com'
// User-defined function to send email 
sendMail(sender_email, receiver_email, 
			email_subject, email_body)
}
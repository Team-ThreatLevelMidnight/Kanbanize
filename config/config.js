const env = process.env.NODE_ENV || 'production'

const accountSid = '';
const authToken = '';

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	development :{
		APIKey : '', // Zoom Credentials
		APISecret : '',
        accountSid : '', //Twilio credentials
        authToken : ''
	},
	production:{	
		APIKey : '',  //Zoom Credentials
		APISecret : '',
       	accountSid : '', //Twilio Credentials
        authToken : ''
	}
};

module.exports = config[env]

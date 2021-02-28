const env = process.env.NODE_ENV || 'production'

const accountSid = '';
const authToken = '';

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	development :{
		APIKey : '',
		APISecret : '',
        accountSid : '',
        authToken : ''
	},
	production:{	
		APIKey : '',
		APISecret : '',
       	accountSid : '',
        authToken : ''
	}
};

module.exports = config[env]

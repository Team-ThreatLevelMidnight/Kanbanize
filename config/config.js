const env = process.env.NODE_ENV || 'production'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	development :{
		APIKey : 'REPLACE_WITH_ZOOM_API_KEY',
		APISecret : 'REPLACE_WITH_ZOOM_API_SECRET',
        accountSid : 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        authToken : 'your_auth_token'
	},
	production:{	
		APIKey : 'REPLACE_WITH_ZOOM_API_KEY',
		APISecret : 'REPLACE_WITH_ZOOM_API_SECRET',
        accountSid : 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        authToken : 'your_auth_token'
	}
};

module.exports = config[env]
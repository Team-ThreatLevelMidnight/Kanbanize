const config = require('./config');

async function StartZoomMeeting() {
    const options = {
        method: "POST",
        uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
        body: {
            topic: "test create meeting",
            type: 1,
            settings: {
                host_video: "true",
                participant_video: "true",
                approval_type: 0
            }
        },
        auth: {
            bearer: token
        },
        headers: {
            "User-Agent": "Zoom-api-Jwt-Request",
            "content-type": "application/json"
        },
        json: true //Parse the JSON string in the response
    };

    try {
        const response = await rp(options);
        result = JSON.stringify(response);
        result = JSON.parse(result);
        console.log(result.start_url);
        opn(result.start_url);


    } catch (error) {
        console.log("API call failed, reason ", error);
    }
}
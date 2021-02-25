const config = require('./config/config');
const agenda=require("./agenda");

async function StartZoomMeeting(topicname,date,time) {
    const options = {
        method: "POST",
        uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
        body: {
            topic: topicname,
            start_time: date+"-"+time,
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
        agenda.scheduleMsg(start_url); // To schedule msg send


    } catch (error) {
        console.log("API call failed, reason ", error);
    }
}
const schedule=require("node-schedule"); // add to package.json
const twilo=require("./twilo");
const sentmail=require("./sendMail");

function scheduleMsg(start_url,time) {
  // Code for parsing date and time goes here
  var temp=time.substring(0,time.length-1);
  console.log(temp)
  var temp2=temp.split('T');
  var datestr=temp2[0].split('-');
  var timestr=temp2[1].split(':');
  console.log(timestr)
  const date=new Date(parseInt(datestr[0]),parseInt(datestr[1]),parseInt(datestr[2]),parseInt(timestr[0]),parseInt(timestr[1]),parseInt(timestr[2]));
  console.log(date)
  var date1 =date.toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  console.log(date1)
  const job=schedule.scheduleJob(date1,function() {
    twilo.send(start_url);
    console.log("Hey")
    sentmail.sendEmail(receiver_email,email_subject,email_body);
  });
}

module.exports.scheduleMsg=scheduleMsg;

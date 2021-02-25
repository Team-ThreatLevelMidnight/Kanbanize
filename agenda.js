const schedule=require("node-schedule"); // add to package.json
const twilo=require("./twilo");
const sentmail=require("./sendMail");


module.exports = function scheduleMsg(start_url,time) {
  // Code for parsing date and time goes here
  temp=time.substring(0,time.length-1);
  temp2=temp.split('T');
  datestr=temp2[0].split('-');
  timestr=temp2[1].split(':');
  const date=new Date(parseInt(datestr[0]),parseInt(datestr[1]),parseInt(datestr[2]),parseInt(timestr[0]),parseInt(timestr[1]),parseInt(timestr[2]));
  const job=schedule.scheduleJob(date,function() {
    twilo.send(start_url);
    sentmail.sendEmail(receiver_email,email_subject,email_body);
  });
}
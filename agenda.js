const schedule=require("node-schedule"); // add to package.json
const twilo=require("./twilo");
const sentmail=require("./sendMail");

function scheduleMsg(start_url,time) {
  // Code for parsing date and time goes here
  const temp=time.substring(0,time.length-1);
  const temp2=temp.split('T');
  const datestr=temp2[0].split('-');
  const timestr=temp2[1].split(':');
  if(parseInt(timestr[2])>=30)
  {
    const date=new Date(parseInt(datestr[0]),parseInt(datestr[1]),parseInt(datestr[2]),parseInt(timestr[0]),parseInt(timestr[1])-5,parseInt(timestr[2])-30);
  }
  else
  {
    const date=new Date(parseInt(datestr[0]),parseInt(datestr[1]),parseInt(datestr[2]),parseInt(timestr[0]),parseInt(timestr[1])-6,60+(parseInt(timestr[2])-30));
  }
  const job=schedule.scheduleJob(date,function() {
    twilo.send(start_url);
    sentmail.sendEmail(receiver_email,email_subject,email_body);
  });
}

module.exports.scheduleMsg = scheduleMsg;
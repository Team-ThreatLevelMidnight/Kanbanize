const agenda = new Agenda();
const twilo=require("./twilo");
const sentmail=require("./sendMail");


function scheduleMsg(start_url) {
  await agenda.start();
  agenda.define("Notify users", async (job) => {
    await twilo.send(start_url);
    await sentmail.sendEmail(receiver_email,email_subject,email_body);
  });
  
  (async function () {
    
  await agenda.schedule("before 5 minutes", "sent reminder", { userCount: 100 });
  
  })();
}


const agenda = new Agenda();
const twilo=require("./twilo");

function scheduleMsg(start_url) {
  await agenda.start();
  agenda.define("Notify users", async (job) => {
    await twilo.send(start_url);
  });
  
  (async function () {
    
  await agenda.schedule("before 5 minutes", "sent reminder", { userCount: 100 });
  
  })();
}


const agenda = new Agenda();

await agenda.start();

agenda.define("Notify users", async (job) => {
  await twilo();
});

(async function () {
  
await agenda.schedule("before 5 mins", "printAnalyticsReport", { userCount: 100 });

})();

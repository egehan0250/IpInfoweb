(async () => {
    const { Client, Intents } = require("discord.js");
   const path = __dirname;
  const client = new Client({
    intents: 32767,
  });
  /////////////////////////////EVENTS//////////////////////////////
  /////////////////////////////EVENTS//////////////////////////////

  /////////////////////////////EVENTS//////////////////////////////
  require('./fast_dashboard.js')(client)
  /////////////////////////////EVENTS//////////////////////////////


})()
////bundan sonra kod yazamazsın client kapanışı bu async

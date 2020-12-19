require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ["MESSAGE"]
});

client.on('ready', () => {
  console.log(`Nubia: On.`);
});

client.on('message', msg => {
  switch(msg.content) {
    case 'ping':
      msg.channel.send('pong');
      break;
    case 'marco':
      msg.channel.send('polo!');
      break;
    case 'weh yuh seh?':
      msg.channel.send('Gaza mi seh!');
      break;
    case 'nubia i love you':
      msg.react('❤️')
      break;
  }
});

client.login( process.env.BOT_TOKEN )
require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ["MESSAGE"]
});
const generalID = process.env.GENERAL_ID


let newYears = new Date('January 1, 2021 05:00:00')
let testDate = new Date('December 27, 2020 09:03:00')


client.on('ready', () => {
  console.log(`Nubia: On.`);
});


client.setTimeout(async () => {
  let response = await client.channels.fetch(generalID)
  response.send('Happy New Year!!')
}, newYears - Date.now())

client.on('message', msg => {
  switch(msg.content.toLowerCase()) {
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
    case 'nubia we love you':
      msg.react('❤️')
      msg.channel.send('Love you guys too... Except Bob. 😂')
      break;
  }

  if (msg.content === `${process.env.PREFIX} server`) {
    msg.channel.send(`This server's name is: ${msg.guild.name}`);
  }

  



  // Command to stream audio files

  // Command for setting meetings and reminders

  // Send whatsapp messages

});

client.login( process.env.BOT_TOKEN )
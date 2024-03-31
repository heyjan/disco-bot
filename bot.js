require("dotenv").config();

const { Client, WebhookClient, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const client = new Client({
  partials: ['MESSAGE', 'REACTION'],
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// const webhookClient = new WebhookClient(
//     process.env.WEBHOOK_ID,
//     process.env.WEBHOOK_TOKEN,
//     {
//       allowedMentions: {
//         parse: ['users', 'roles'],
//         repliedUser: true
//       }
//     }
// );

const PREFIX = "$";

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`);
  const testid = "1234";


    // for (let key in keys) {
    // console.log(key + ": " + keys[key]);
    // }

      
      // console.log(filteredResponse);
    // Object.keys(keys).forEach(key => {  
    //   console.log(`${key}: ${keys[value]}`)
    // })

});

function getStadt() {
  const rawdata = fs.readFileSync('stadt.json');
  return JSON.parse(rawdata);
}

function Memberfilter(member) {
  const keys = getStadt();
  let filteredResponse = keys.filter(function(item) {
    return item.ID == member;
  });
  return filteredResponse.length > 0 ? filteredResponse[0].Name : null;
}


client.on('guildMemberAdd', member => {
  // const channelId = '1216699728482402314';
  // const channel = member.guild.channels.cache.get(channelId);
  // let UID = member.id;
  member.send('Hallo, bitte starte den Verifizierungsprozes indem du **cscmember** eingibst');
  // eine Nachricht in einem CHannel senden
  // channel.send(`${member} hallo`);
  // console.log(member);
  // Rolle zuweisen
  let roleID = "1217037163653369886";
  member.roles.add(roleID).catch(console.error);
});

client.on("message", async (message) => {
  // if (message.author.bot) return;

  // if (message.content === 'CSC-Member') {
  //   message.author
  //      .send("Hi! What's your name?")
  //      .then((start) => {
  //       message.channel
  //       .awaitMessages({ true:1 , max: 1, time: 50000, errors: ['time'] })
  //       .then((name) => {
  //           message.author.send(`Pleased to meet you, ${name}! What is your favourite colour?`).then((start) => {
  //             message.channel
  //                 .awaitMessages({ true:1 , max: 1, time: 50000, errors: ['time'] })
  //                 .then((colour) => {
  //                   message.author.send(`I love ${colour} too, ${name}!`);
  //                 })
  //                 .catch((err) => message.author.send("There's been an error or you've timed out! Try again with `start dialogue`!"));
  //           })
  //       })
  //       .catch((err) => message.author.send("There's been an error or you've timed out! Try again with `start dialogue`!"));
  //         // Response code goes here.
  //      })
  // }

  if (message.content === 'cscmember'){
    const filter = (m) => m.author.id === message.author.id
    // console.log(`Removed nickname for ${message.author.username}`)
    message.author.send('Bitte gib deine Mitgliedsnummer ein. Du findest Sie auf .....');
    message.channel.awaitMessages(filter, {max: 1, time: 30000, errors: ['time']})
      .then((collected) => {
        // console.log(collected.size);
        const msg = collected.first();
        // console.log(msg.content);
        let testkontent = Memberfilter(msg.content);
        console.log(testkontent);
        if(msg.content){

          message.author.send('erfolgreich verifiziert');
        } else {
          message.author.send('Bitte warte 24 Stunden und probiere es dann noch einmal');
        }

      })
      .catch((err) => {console.log(err), message.channel.send('Timeout, bitte probiere es später noch einmal')});
  }

  
})

// client.on('message', async (message) => {
//   if (message.author.bot) return;
//   if (message.content.startsWith(PREFIX)) {
//     const [CMD_NAME, ...args] = message.content
//       .trim()
//       .substring(PREFIX.length)
//       .split(/\s+/);
//     if (CMD_NAME === 'kick') {
//       if (!message.member.hasPermission('KICK_MEMBERS'))
//         return message.reply('You do not have permissions to use that command');
//       if (args.length === 0)
//         return message.reply('Please provide an ID');
//       const member = message.guild.members.cache.get(args[0]);
//       if (member) {
//         member
//           .kick()
//           .then((member) => message.channel.send(`${member} was kicked.`))
//           .catch((err) => message.channel.send('I cannot kick that user :('));
//       } else {
//         message.channel.send('That member was not found');
//       }
//     } else if (CMD_NAME === 'ban') {
//       if (!message.member.hasPermission('BAN_MEMBERS'))
//         return message.reply("You do not have permissions to use that command");
//       if (args.length === 0) return message.reply("Please provide an ID");
//       try {
//         const user = await message.guild.members.ban(args[0]);
//         message.channel.send('User was banned successfully');
//       } catch (err) {
//         console.log(err);
//         message.channel.send('An error occured. Either I do not have permissions or the user was not found');
//       }
//     } else if (CMD_NAME === 'announce') {
//       console.log(args);
//       const msg = args.join(' ');
//       console.log(msg);
//       webhookClient.send(msg);
//     }
//   }
// });

// client.on('messageReactionAdd', (reaction, user) => {
//   const { name } = reaction.emoji;
//   const member = reaction.message.guild.members.cache.get(user.id);
//   if (reaction.message.id === '738666523408990258') {
//     switch (name) {
//       case '🍎':
//         member.roles.add('738664659103776818');
//         break;
//       case '🍌':
//         member.roles.add('738664632838782998');
//         break;
//       case '🍇':
//         member.roles.add('738664618511171634');
//         break;
//       case '🍑':
//         member.roles.add('738664590178779167');
//         break;
//     }
//   }
// });

// client.on('messageReactionRemove', (reaction, user) => {
//   const { name } = reaction.emoji;
//   const member = reaction.message.guild.members.cache.get(user.id);
//   if (reaction.message.id === '738666523408990258') {
//     switch (name) {
//       case '🍎':
//         member.roles.remove('738664659103776818');
//         break;
//       case '🍌':
//         member.roles.remove('738664632838782998');
//         break;
//       case '🍇':
//         member.roles.remove('738664618511171634');
//         break;
//       case '🍑':
//         member.roles.remove('738664590178779167');
//         break;
//     }
//   }
// });

client.login(process.env.DISCORDJS_BOT_TOKEN);

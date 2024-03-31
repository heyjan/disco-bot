require("dotenv").config();

const { Client, WebhookClient } = require('discord.js');

const client = new Client({
  partials: ['MESSAGE', 'REACTION']
});

const webhookClient = new WebhookClient(
  process.env.WEBHOOK_ID,
  process.env.WEBHOOK_TOKEN,
);

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


function Memberfilter(member){

  const keys = [
    {
      "ID": 431716,
      "Name": "Berlin"
    },
    {
      "ID": 769742,
      "Name": "Hamburg"
    },
    {
      "ID": 737930,
      "Name": "M�nchen"
    },
    {
      "ID": 979600,
      "Name": "K�ln"
    },
    {
      "ID": 878752,
      "Name": "Frankfurt am Main"
    },
    {
      "ID": 653620,
      "Name": "Stuttgart"
    },
    {
      "ID": 734389,
      "Name": "D�sseldorf"
    },
    {
      "ID": 499933,
      "Name": "Leipzig"
    },
    {
      "ID": 589989,
      "Name": "Dortmund"
    },
    {
      "ID": 268353,
      "Name": "Essen"
    },
    {
      "ID": 580045,
      "Name": "Bremen"
    },
    {
      "ID": 704936,
      "Name": "Dresden"
    },
    {
      "ID": 668059,
      "Name": "Hannover"
    },
    {
      "ID": 723702,
      "Name": "N�rnberg"
    },
    {
      "ID": 483616,
      "Name": "Duisburg"
    },
    {
      "ID": 516193,
      "Name": "Bochum"
    },
    {
      "ID": 802532,
      "Name": "Wuppertal"
    },
    {
      "ID": 589105,
      "Name": "Bielefeld"
    },
    {
      "ID": 381345,
      "Name": "Bonn"
    },
    {
      "ID": 867504,
      "Name": "M�nster"
    },
    {
      "ID": 476959,
      "Name": "Mannheim"
    },
    {
      "ID": 692793,
      "Name": "Karlsruhe"
    },
    {
      "ID": 414510,
      "Name": "Augsburg"
    },
    {
      "ID": 675220,
      "Name": "Wiesbaden"
    },
    {
      "ID": 647964,
      "Name": "M�nchengladbach"
    },
    {
      "ID": 507275,
      "Name": "Gelsenkirchen"
    },
    {
      "ID": 360371,
      "Name": "Aachen"
    },
    {
      "ID": 747065,
      "Name": "Braunschweig"
    },
    {
      "ID": 810896,
      "Name": "Chemnitz?1"
    },
    {
      "ID": 176037,
      "Name": "Kiel"
    },
    {
      "ID": 364554,
      "Name": "Halle (Saale)"
    },
    {
      "ID": 637178,
      "Name": "Magdeburg"
    },
    {
      "ID": 805151,
      "Name": "Freiburg im Breisgau"
    },
    {
      "ID": 996436,
      "Name": "Krefeld"
    },
    {
      "ID": 238871,
      "Name": "Mainz"
    },
    {
      "ID": 581434,
      "Name": "L�beck"
    },
    {
      "ID": 633417,
      "Name": "Erfurt"
    },
    {
      "ID": 882841,
      "Name": "Oberhausen"
    },
    {
      "ID": 330160,
      "Name": "Rostock"
    },
    {
      "ID": 798514,
      "Name": "Kassel"
    },
    {
      "ID": 236358,
      "Name": "Hagen"
    },
    {
      "ID": 175515,
      "Name": "Potsdam"
    },
    {
      "ID": 120632,
      "Name": "Saarbr�cken"
    },
    {
      "ID": 938024,
      "Name": "Hamm"
    },
    {
      "ID": 811576,
      "Name": "Ludwigshafen am Rhein"
    },
    {
      "ID": 790268,
      "Name": "Oldenburg"
    },
    {
      "ID": 756271,
      "Name": "M�lheim an der Ruhr"
    },
    {
      "ID": 512262,
      "Name": "Osnabr�ck"
    },
    {
      "ID": 263942,
      "Name": "Leverkusen"
    },
    {
      "ID": 525141,
      "Name": "Heidelberg"
    },
    {
      "ID": 107607,
      "Name": "Darmstadt"
    },
    {
      "ID": 665633,
      "Name": "Solingen"
    },
    {
      "ID": 764091,
      "Name": "Regensburg"
    },
    {
      "ID": 104273,
      "Name": "Herne"
    },
    {
      "ID": 749882,
      "Name": "Paderborn"
    },
    {
      "ID": 885188,
      "Name": "Neuss"
    },
    {
      "ID": 709290,
      "Name": "Ingolstadt"
    },
    {
      "ID": 496331,
      "Name": "Offenbach am Main"
    },
    {
      "ID": 554577,
      "Name": "F�rth"
    },
    {
      "ID": 338564,
      "Name": "Ulm"
    },
    {
      "ID": 219019,
      "Name": "Heilbronn"
    },
    {
      "ID": 828583,
      "Name": "Pforzheim"
    },
    {
      "ID": 660704,
      "Name": "W�rzburg"
    },
    {
      "ID": 639463,
      "Name": "Wolfsburg"
    },
    {
      "ID": 807096,
      "Name": "G�ttingen"
    },
    {
      "ID": 243174,
      "Name": "Bottrop"
    },
    {
      "ID": 104104,
      "Name": "Reutlingen"
    },
    {
      "ID": 274782,
      "Name": "Erlangen"
    },
    {
      "ID": 732115,
      "Name": "Bremerhaven"
    },
    {
      "ID": 162986,
      "Name": "Koblenz"
    },
    {
      "ID": 782650,
      "Name": "Bergisch Gladbach"
    },
    {
      "ID": 443350,
      "Name": "Remscheid"
    },
    {
      "ID": 229958,
      "Name": "Trier"
    },
    {
      "ID": 710016,
      "Name": "Recklinghausen"
    },
    {
      "ID": 257774,
      "Name": "Jena"
    },
    {
      "ID": 730866,
      "Name": "Moers"
    },
    {
      "ID": 572297,
      "Name": "Salzgitter"
    },
    {
      "ID": 978606,
      "Name": "Siegen"
    },
    {
      "ID": 974062,
      "Name": "G�tersloh"
    },
    {
      "ID": 830825,
      "Name": "Hildesheim"
    },
    {
      "ID": 682963,
      "Name": "Hanau"
    },
    {
      "ID": 626517,
      "Name": "Kaiserslautern"
    },
    {
      "ID": 255420,
      "Name": "Cottbus"
    },
    {
      "ID": 829434,
      "Name": "Schwerin"
    },
    {
      "ID": 623198,
      "Name": "Witten"
    },
    {
      "ID": 905165,
      "Name": "Esslingen am Neckar"
    },
    {
      "ID": 830472,
      "Name": "Ludwigsburg"
    },
    {
      "ID": 500235,
      "Name": "Gie�en"
    },
    {
      "ID": 879451,
      "Name": "Gera"
    },
    {
      "ID": 522056,
      "Name": "D�ren"
    },
    {
      "ID": 176128,
      "Name": "T�bingen"
    },
    {
      "ID": 474227,
      "Name": "Flensburg"
    },
    {
      "ID": 765921,
      "Name": "Iserlohn"
    },
    {
      "ID": 147272,
      "Name": "Villingen-Schwenningen?3"
    },
    {
      "ID": 257285,
      "Name": "Ratingen"
    },
    {
      "ID": 162771,
      "Name": "Zwickau"
    },
    {
      "ID": 674875,
      "Name": "L�nen"
    },
    {
      "ID": 230983,
      "Name": "Konstanz"
    },
    {
      "ID": 746776,
      "Name": "Worms"
    },
    {
      "ID": 666444,
      "Name": "Marl"
    },
    {
      "ID": 134582,
      "Name": "Minden"
    },
    {
      "ID": 179810,
      "Name": "Velbert"
    },
    {
      "ID": 640316,
      "Name": "Norderstedt"
    },
    {
      "ID": 631484,
      "Name": "Bamberg"
    },
    {
      "ID": 858841,
      "Name": "Dessau-Ro�lau?2"
    },
    {
      "ID": 512975,
      "Name": "Neum�nster"
    },
    {
      "ID": 250598,
      "Name": "Delmenhorst"
    },
    {
      "ID": 912295,
      "Name": "Viersen"
    },
    {
      "ID": 289240,
      "Name": "Rheine"
    },
    {
      "ID": 543520,
      "Name": "Marburg"
    },
    {
      "ID": 900118,
      "Name": "L�neburg"
    },
    {
      "ID": 843688,
      "Name": "Dorsten"
    },
    {
      "ID": 138503,
      "Name": "Troisdorf"
    },
    {
      "ID": 295849,
      "Name": "Wilhelmshaven"
    },
    {
      "ID": 921160,
      "Name": "Gladbeck"
    },
    {
      "ID": 547936,
      "Name": "Landshut"
    },
    {
      "ID": 891718,
      "Name": "Detmold"
    },
    {
      "ID": 867639,
      "Name": "Bayreuth"
    },
    {
      "ID": 928823,
      "Name": "Arnsberg"
    },
    {
      "ID": 130772,
      "Name": "Castrop-Rauxel"
    },
    {
      "ID": 593316,
      "Name": "Brandenburg an der Havel"
    },
    {
      "ID": 874616,
      "Name": "Aschaffenburg"
    },
    {
      "ID": 131066,
      "Name": "Bocholt"
    },
    {
      "ID": 980907,
      "Name": "L�denscheid"
    },
    {
      "ID": 536002,
      "Name": "Celle"
    },
    {
      "ID": 531602,
      "Name": "Kempten (Allg�u)"
    },
    {
      "ID": 688515,
      "Name": "Fulda"
    },
    {
      "ID": 712430,
      "Name": "Lippstadt"
    },
    {
      "ID": 295709,
      "Name": "Aalen"
    },
    {
      "ID": 355663,
      "Name": "Dinslaken"
    },
    {
      "ID": 314754,
      "Name": "Herford"
    },
    {
      "ID": 918744,
      "Name": "R�sselsheim am Main"
    },
    {
      "ID": 891403,
      "Name": "Kerpen"
    },
    {
      "ID": 378471,
      "Name": "Neuwied"
    },
    {
      "ID": 654131,
      "Name": "Weimar"
    },
    {
      "ID": 136446,
      "Name": "Dormagen"
    },
    {
      "ID": 337737,
      "Name": "Sindelfingen"
    },
    {
      "ID": 840780,
      "Name": "Plauen"
    },
    {
      "ID": 235463,
      "Name": "Grevenbroich"
    },
    {
      "ID": 208269,
      "Name": "Rosenheim"
    },
    {
      "ID": 969122,
      "Name": "Neubrandenburg"
    },
    {
      "ID": 710820,
      "Name": "Friedrichshafen"
    },
    {
      "ID": 454222,
      "Name": "Herten"
    },
    {
      "ID": 431575,
      "Name": "Bergheim"
    },
    {
      "ID": 698139,
      "Name": "Schw�bisch Gm�nd"
    },
    {
      "ID": 326096,
      "Name": "Offenburg"
    },
    {
      "ID": 264419,
      "Name": "Garbsen"
    },
    {
      "ID": 795741,
      "Name": "Wesel"
    },
    {
      "ID": 812713,
      "Name": "Neu-Ulm"
    },
    {
      "ID": 952658,
      "Name": "H�rth"
    },
    {
      "ID": 252549,
      "Name": "Unna"
    },
    {
      "ID": 410937,
      "Name": "Langenfeld (Rheinland)"
    },
    {
      "ID": 923833,
      "Name": "Euskirchen"
    },
    {
      "ID": 391744,
      "Name": "Greifswald"
    },
    {
      "ID": 762842,
      "Name": "Stralsund"
    },
    {
      "ID": 810912,
      "Name": "G�ppingen"
    },
    {
      "ID": 397795,
      "Name": "Frankfurt (Oder)"
    },
    {
      "ID": 664230,
      "Name": "Hameln"
    },
    {
      "ID": 917139,
      "Name": "Meerbusch"
    },
    {
      "ID": 306109,
      "Name": "Baden-Baden"
    },
    {
      "ID": 745436,
      "Name": "G�rlitz"
    },
    {
      "ID": 313263,
      "Name": "Lingen (Ems)"
    },
    {
      "ID": 963256,
      "Name": "Stolberg (Rheinland)"
    },
    {
      "ID": 761819,
      "Name": "Sankt Augustin"
    },
    {
      "ID": 533929,
      "Name": "Waiblingen"
    },
    {
      "ID": 231526,
      "Name": "Eschweiler"
    },
    {
      "ID": 174974,
      "Name": "Hilden"
    },
    {
      "ID": 852024,
      "Name": "Pulheim"
    },
    {
      "ID": 215872,
      "Name": "Langenhagen"
    },
    {
      "ID": 723136,
      "Name": "Nordhorn"
    },
    {
      "ID": 414342,
      "Name": "Bad Homburg vor der H�he"
    },
    {
      "ID": 681879,
      "Name": "Bad Salzuflen"
    },
    {
      "ID": 815657,
      "Name": "Schweinfurt"
    },
    {
      "ID": 607120,
      "Name": "Hattingen"
    },
    {
      "ID": 166932,
      "Name": "Wetzlar"
    },
    {
      "ID": 448049,
      "Name": "Neustadt an der Weinstra�e"
    },
    {
      "ID": 343295,
      "Name": "Passau"
    },
    {
      "ID": 102596,
      "Name": "Kleve"
    },
    {
      "ID": 187125,
      "Name": "Ahlen"
    },
    {
      "ID": 121284,
      "Name": "Frechen"
    }
   ]

   let filteredResponse = "";
  filteredResponse = keys.filter(function(item) {
    if(item.ID == member){
      // console.log(item.Name);
      const test = item.Name;
      return test.toString();
    }
  // return item.ID == member;
  return filteredResponse;
  });
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

tbconst Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`𝐼𝑀 𝐿𝑂𝑁𝐿𝑌.. 𝐼𝑀 𝑆𝐴𝐷... 𝐼𝑀 𝑇𝑅𝑌𝐼𝑁𝐺 𝑇𝑂 𝐹𝐼𝑁𝐷 𝑀𝑌 𝑊𝐴𝑌 𝐵𝐴𝐶𝐾 𝐻𝑂𝑀𝐸 𝑇𝑂 𝑌𝑂𝑈`,"http://twitch.tv/TheHatba")
client.user.setStatus("dnd")
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء

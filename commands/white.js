const db = require("quick.db");
const Discord = require('discord.js');
module.exports = {
    name: "whitelist",
    description: "sesfsaaaaafscfsfsfig",
    run: async (client, message, args) => {




      let kontrol = await db.fetch(`dil_${message.guild.id}`);
      if (kontrol == "tr") {
    
        let eklenti = new Discord.MessageEmbed()  
        .setAuthor(`NETHER BEYAZLİSTE`)
        .setColor('#4b73e9')
        .setDescription(`Hadi Beyazliste kullanalım!`)  
        .addField(`__Beyazliste listesi__`,`🌪 Beyaz listedeki herkesi görmek için: \n\`n!list\` `,true)
        .addField(`__İnsanları ekle ve Çıkar!__`,`🤹 \`n!add\` | Birini beyaz listeye ekler \n🎭 \`n!delete\` | Birini beyaz listeden çıkarır`)
          .setImage(`https://cdn.discordapp.com/attachments/793502641418010624/796385452021907486/standard_15.gif`)
         message.channel.send(eklenti) 
    
    
      }else{


        let eklenti = new Discord.MessageEmbed()  
        .setAuthor(`NETHER WHITELIST`)
        .setColor('#4b73e9')
        .setDescription(`Lets help you whitelist users!`)  
        .addField(`__Whitelist list__`,`🌪 Check everyone who is whitelisted! \n\`!list\` `,true)
        .addField(`__Manage the whitelist__`,`🤹 \`n!add\` | Add someone to the whitelist \n🎭 \`n!delete\` | Remove users from whitelist `)
          .setImage(`https://cdn.discordapp.com/attachments/793502641418010624/796385452021907486/standard_15.gif`)
         message.channel.send(eklenti) 


  }}};

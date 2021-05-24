const Discord = require("discord.js")
const db = require("quick.db")
 const ms = require('parse-ms')
module.exports = {
    name: "list",
    description: "Shows Whitelist-list",
    run: async (client, message, args) => {
      let kontrol = await db.fetch(`dil_${message.guild.id}`);
      if (kontrol == "tr") {
        let guild = message.guild.iconURL()
   
          let wordlist = new Discord.MessageEmbed()
         .setFooter(message.author.username, message.author.displayAvatarURL)
            .setImage(`https://cdn.discordapp.com/attachments/793502641418010624/796385452021907486/standard_15.gif`)
         let database = db.get(`trustedusers_${message.guild.id}`)
         if(database && database.length) {
            let array =[]
              database.forEach(m => {
              array.push(`<@${m.user}>`)
            })
         
            wordlist.addField('** WhiteList **', `${array.join("\n")}`)
        }
        return message.channel.send(wordlist);
      }
else {
  let guild = message.guild.iconURL()
   
  let wordlist = new Discord.MessageEmbed()
 .setFooter(message.author.username, message.author.displayAvatarURL)
    .setImage(`https://cdn.discordapp.com/attachments/793502641418010624/796385452021907486/standard_15.gif`)
 let database = db.get(`trustedusers_${message.guild.id}`)
 if(database && database.length) {
    let array =[]
      database.forEach(m => {
      array.push(`<@${m.user}>`)
    })
 
    wordlist.addField('** WhiteList **', `${array.join("\n")}`)
}
return message.channel.send(wordlist);
}


}
}

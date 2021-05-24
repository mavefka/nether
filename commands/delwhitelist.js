const Discord = require("discord.js")
const db = require("quick.db")
 const ms = require('parse-ms');
const { truncate } = require("fs");
module.exports = {
    name: "delete",
    description: "set guild anit raid config",
    run: async (client, message, args) => {

if(message.author.id === message.guild.ownerID) {
    
        let user = message.mentions.users.first()
        if(!user) {
            return message.channel.send(`mention user/birini etiketle`)
        }
        const guildicon = message.guild.iconURL();
        let database = db.get(`trustedusers_${message.guild.id}`)
        if(database) {
            let data = database.find(x => x.user === user.id)
          let unabletofind = new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.displayAvatarURL())
          .setDescription(`
          ** Unexpected error, code: 404 Unfound** 
          `)
          .setFooter(message.guild.name, guildicon)
          
            if(!data) return message.channel.send(unabletofind)
          
            let value = database.indexOf(data)
            delete database[value]
          
            var filter = database.filter(x => {
              return x != null && x != ''
            })
          
            db.set(`trustedusers_${message.guild.id}`, filter)
          let deleted = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
          .setDescription(`
          removed ${user} From Trusted Users!\n${user} Beyaz listeden çıkarıldı!
          `)
          .setFooter(message.guild.name, guildicon)
          
            return message.channel.send(deleted)
          
        } else {          
     message.channel.send(`unexpected error: 404 unfound`)
        }}
    
      message.channel.send(`You are not allowed to use this!`)
}}
 

const db = require('quick.db')
const discord = require('discord.js')
const ayarlar = require('../ayarlar.json');












module.exports = async message => {
  let client = message.client;
  if (message.author.bot) return;
  let prefix;
  
  if (db.has(`prefix_${message.guild.id}`) === true) {
    prefix = db.fetch(`prefix_${message.guild.id}`)
  }
    
  if (db.has(`prefix_${message.guild.id}`) === false) {
    prefix = ayarlar.prefix
  }
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  

  var servers = client.guilds.cache.size








  let cmd;  
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;

    //MESSAGE.JS DE 
// cmd.run(client, message, args, db); YAZISININ ÜSTÜNE
//YAPIŞTIR

const karaliste = new discord.MessageEmbed()
.setTitle(':flag_tr: Hey, botun karalistesinde bulunduğun için botu kullanamazsın. \n :flag_eu: Hey, you are blacklisted in Nether\'s database, please try again later.  ')
.setColor('BLUE')


const embed28 = new discord.MessageEmbed()
.setTitle(':flag_tr: Karalistede olduğun için komutları kullanamıyorsun \n:flag_eu: you are blacklisted from using this bot')
.setColor('BLUE');

if (db.fetch(`cokaradalistere_${message.author.id}`)) return message.channel.send(embed28)
    cmd.run(client, message, params, perms);
  }

};
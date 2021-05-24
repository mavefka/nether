const Discord = require("discord.js")
const db = require("quick.db")
 const ms = require('parse-ms');
const { truncate } = require("fs");
const fs = require('fs')
const yaml = require("js-yaml");
const { mainprefix , token , status , dpunishment } = yaml.load(fs.readFileSync("./antiraid.yml"));
discord = Discord

module.exports = {
    name: "config",
    description: "set guild anit raid antiraid",
    run: async (client, message, args) => {
    let cmd = args[0];




      

    const DBL = require("dblapi.js");
    const emirhan = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczMzcyMDMyNjY0Njc5MjI2MyIsImJvdCI6dHJ1ZSwiaWF0IjoxNjExNzU3MjY2fQ.HefFKmQOjXErzGU-kwpma-3wE7pTOI-Gor_MT69j5fA', client);
    const anan = new discord.MessageEmbed()
    .setTitle("Hata")
    .setColor("RED")
    .setDescription("Nether antiraid özelliğini kullanmak için bota oy vermeniz gerekmektedir, özellikleri açtıktan sonra bir daha oy vermenize gerek kalmayacaktır!")
    .addField("Dikkat!", "Oy verdikten sonra bize leylekler tarafından ulaştırılması birkaç dakika sürebilir")
    .addField("Oy Vermek için:", `[Buraya Tıkla!](https://top.gg/bot/733720326646792263/vote)`)
    .setFooter('nether')

    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "tr") {
      emirhan.hasVoted(message.author.id).then(voted => { 
        if (!voted) {
            message.channel.send(anan)
  
  
  
        } else {
      if(message.author.id === message.guild.ownerID) {    

      const guildicon = message.guild.iconURL();
      if(!cmd) {
          const embed = new Discord.MessageEmbed()
          .setAuthor(message.author.tag,message.author.displayAvatarURL())
          .setColor('#4b73e9')
            .setImage(`https://cdn.discordapp.com/attachments/754581545158836275/773252937928671272/output-onlinepngtools_3_1.png`)
          .setDescription(`
          » **Rol Koruma**
          ${mainprefix}config rolkurmalimiti <sayı>
         ${mainprefix}config rolsilmelimiti <sayı>  
   
          » ** Kanal koruma **
           ${mainprefix}config kanalkurmalimiti <sayı>
           ${mainprefix}config kanalsilmelimiti <sayı>
  
         » ** Üye Koruma **
           ${mainprefix}config banlimiti <sayı>
           ${mainprefix}config kicklimiti <sayı>
      
          » ** Diğer Ayarlar **
          ${mainprefix}config logkanal <#kanal>
          ${mainprefix}config temizle @kişi
          ${mainprefix}config göster
          ${mainprefix}config ceza <roleremove/kick/ban>
  
          » ** Beyazliste **
          ${mainprefix}whitelist
       `)
   .setFooter(message.guild.name, guildicon)
    return message.channel.send(embed);
  }
   if(cmd.toLowerCase() === 'göster') {
     let rolelimit = db.get(`rolecreatelimit_${message.guild.id}`) 
     if(rolelimit === null) rolelimit = "Disabled :x:"
     let roledelete = db.get(`roledeletelimits_${message.guild.id}`) 
     if(roledelete === null) roledelete = "Disabled :x:"
     let logschannel = db.get(`acitonslogs_${message.guild.id}`)
     let logschannel2 = db.get(`acitonslogs_${message.guild.id}`)
     if(logschannel === null) logschannel = "Disabled :x:"
     else logschannel = `<#${logschannel2}>`
     let channelcreatelimits = db.get(`channelcreatelimits_${message.guild.id}`)
     if(channelcreatelimits === null) channelcreatelimits = "Disabled :x:"
     let channeldeletelimits = db.get(`channeldeletelimits_${message.guild.id}`)
     if(channeldeletelimits === null) channeldeletelimits = "Disabled :x:"
     let banlimits = db.get(`banlimits_${message.guild.id}`)
    if(banlimits === null) banlimits = "Disabled :x:"
    let kicklimits = db.get(`kicklimits_${message.guild.id}`)
    if(kicklimits === null) kicklimits = "Disabled :x:"
    let punishment = db.get(`punishment_${message.guild.id}`)
    if(dpunishment === null) dpunishment = "None"
    if(punishment === null) punishment = dpunishment
     let gösterembebd = new Discord.MessageEmbed()
  
     .setAuthor(message.author.username, message.author.displayAvatarURL())
       .setImage(`https://cdn.discordapp.com/attachments/754581545158836275/773252937928671272/output-onlinepngtools_3_1.png`)
     .setColor('#4b73e9')
     .setTitle(`⚙️ ${message.guild.name} antiraidler   `)
     .addField('Rol Oluşturma limiti', rolelimit, true)
     .addField('Role Silme limiti', roledelete, true)
     .addField(`Log Kanalı Channel`, logschannel, true)
     .addField(`Kanal Oluşturma limiti`, channelcreatelimits, true)
     .addField(`Kanal Silme Limiti`, channeldeletelimits, true)
     .addField(`Ban limiti`, banlimits, true)
     .addField(`Kick limiti`, kicklimits, true)
     .addField(`ceza`, punishment, true)
      .setFooter(message.guild.name, guildicon)
      return message.channel.send(gösterembebd);
   }
   if(cmd.toLowerCase() === 'rolkurmalimiti') {
  let rolecreate = args.slice(1).join(" ");
  if(!rolecreate) {
   let missing = new Discord.MessageEmbed()
   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setDescription(`bilinmeyen kullanım biçimi`)
   .setFooter(message.guild.name, guildicon)
  
    return message.channel.send(missing);
  }
  if(isNaN(rolecreate)) {
    let missing = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor('#4b73e9')
    .setDescription(`bilinmeyen kullanım biçimi`)
    .setFooter(message.guild.name, guildicon)
  return message.channel.send(missing);
  }
  db.set(`rolecreatelimit_${message.guild.id}`, rolecreate)
  let done = new Discord.MessageEmbed() 
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setColor('#4b73e9')
  .setDescription(`Rol oluşturma limiti ${rolecreate} sayısına değiştirildi ✅`)
  .setFooter(message.guild.name, guildicon)
  return message.channel.send(done);
  }
  if(cmd.toLowerCase() === 'rolsilmelimiti') {
    let roledelete = args.slice(1).join(" ");
    if(!roledelete) {
     let missing = new Discord.MessageEmbed()
     .setAuthor(message.author.username, message.author.displayAvatarURL())
     .setColor('#4b73e9')
     .setDescription(`bilinmeyen kullanım biçimi`)
     .setFooter(message.guild.name, guildicon)
    
      return message.channel.send(missing);
    }
    if(isNaN(roledelete)) {
      let missing = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setColor('#4b73e9')
      .setDescription(`bilinmeyen kullanım biçimi`)
      .setFooter(message.guild.name, guildicon)
    return message.channel.send(missing);
    }
    db.set(`roledeletelimits_${message.guild.id}`, roledelete)
    let done = new Discord.MessageEmbed() 
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor('#4b73e9')
    .setDescription(`Rol silme limiti sayısı ${roledelete} olarak değiştirdi ✅`)
    .setFooter(message.guild.name, guildicon)
    return message.channel.send(done);
    
  }
  if(cmd.toLowerCase() === 'logkanal') {
    let logs = message.mentions.channels.first();
    if(!logs) {
    let logsembed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor('#4b73e9')
    .setDescription(`bilinmeyen kullanım biçimi`)
    .setFooter(message.guild.name, guildicon)
  return message.channel.send(logsembed);
  }
  logs.send(`** Anit-Raid Log Kanalı Buraya ayarlandı! **`)
  db.set(`acitonslogs_${message.guild.id}`, logs.id)
  let done = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setColor('#4b73e9')
  .setDescription(`Tebrikler! Log kanalı: ${logs} olarak ayarlandı.`)
  .setFooter(message.guild.name, guildicon)
  return message.channel.send(done)
  }
  if(cmd.toLowerCase() === 'kanalkurmalimiti') {
    let rolecreate = args.slice(1).join(" ");
    if(!rolecreate) {
     let missing = new Discord.MessageEmbed()
     .setAuthor(message.author.username, message.author.displayAvatarURL())
     .setColor('#4b73e9')
     .setDescription(`bilinmeyen kullanım biçimi`)
     .setFooter(message.guild.name, guildicon)
    
      return message.channel.send(missing);
    }
    if(isNaN(rolecreate)) {
      let missing = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setDescription(`bilinmeyen kullanım biçimi`)
      .setFooter(message.guild.name, guildicon)
    return message.channel.send(missing);
    }
    db.set(`channelcreatelimits_${message.guild.id}`, rolecreate)
    let done = new Discord.MessageEmbed() 
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor('#4b73e9')
    .setDescription(`Rol oluşturma limiti: ${rolecreate} sayısı olarak değiştirildi ✅`)
    .setFooter(message.guild.name, guildicon)
    return message.channel.send(done);
  }
  if(cmd.toLowerCase() === 'kanalsilmelimiti') {
    let rolecreate = args.slice(1).join(" ");
    if(!rolecreate) {
     let missing = new Discord.MessageEmbed()
     .setAuthor(message.author.username, message.author.displayAvatarURL())
     .setColor('#4b73e9')
     .setDescription(`bilinmeyen kullanım biçimi`)
     .setFooter(message.guild.name, guildicon)
    
      return message.channel.send(missing);
    }
    if(isNaN(rolecreate)) {
      let missing = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setColor('#4b73e9')
      .setDescription('bilinmeyen kullanım biçimi')
      .setFooter(message.guild.name, guildicon)
    return message.channel.send(missing);
    }
    db.set(`channeldeletelimits_${message.guild.id}`, rolecreate)
    let done = new Discord.MessageEmbed() 
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor('#4b73e9')
    .setDescription(`Kanal silme limiti, ${rolecreate} olarak değiştirildi. ✅`)
    .setFooter(message.guild.name, guildicon)
    return message.channel.send(done);
  }
  if(cmd.toLowerCase() === 'banlimiti') {
    let rolecreate = args.slice(1).join(" ");
    if(!rolecreate) {
     let missing = new Discord.MessageEmbed()
     .setAuthor(message.author.username, message.author.displayAvatarURL())
     .setColor('#4b73e9')
     .setDescription('bilinmeyen kullanım biçimi')
     .setFooter(message.guild.name, guildicon)
    
      return message.channel.send(missing);
    }
    if(isNaN(rolecreate)) {
      let missing = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setColor('#4b73e9')
      .setDescription(`bilinmeyen kullanım biçimi`)
      .setFooter(message.guild.name, guildicon)
    return message.channel.send(missing);
    }
    db.set(`banlimits_${message.guild.id}`, rolecreate)
    let done = new Discord.MessageEmbed() 
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor('#4b73e9')
    .setDescription(`Tebrikler ban limit ${rolecreate} olarak değiştirildi. ✅`)
    .setFooter(message.guild.name, guildicon)
    return message.channel.send(done);
  }
  if(cmd.toLowerCase() === 'kicklimiti') {
    let rolecreate = args.slice(1).join(" ");
    if(!rolecreate) {
     let missing = new Discord.MessageEmbed()
     .setAuthor(message.author.username, message.author.displayAvatarURL())
     .setColor('#4b73e9')
     .setDescription(`bilinmeyen kullanım biçimi`)
     .setFooter(message.guild.name, guildicon)
    
      return message.channel.send(missing);
    }
    if(isNaN(rolecreate)) {
      let missing = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setColor('#4b73e9')
      .setDescription(`bilinmeyen kullanım biçimi`)
      .setFooter(message.guild.name, guildicon)
    return message.channel.send(missing);
    }
    db.set(`kicklimits_${message.guild.id}`, rolecreate)
    let done = new Discord.MessageEmbed() 
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor('#4b73e9')
    .setDescription(`Yaşasın! Kicklimit ${rolecreate} olarak değiştirildi. ✅`)
    .setFooter(message.guild.name, guildicon)
    return message.channel.send(done);
  }
  if(cmd.toLowerCase() === 'temizle') {
    let user = message.mentions.users.first()
  if(!user) {
    return message.channel.send(`** Mention User **`);
  }
  db.delete(`executer_${message.guild.id}_${user.id}_kicklimits`) 
  db.delete(`executer_${message.guild.id}_${user.id}_banlimits`)
  db.delete(`executer_${message.guild.id}_${user.id}_rolecreate`)
  db.delete(`executer_${message.guild.id}_${user.id}_roledelete`)
  db.delete(`executer_${message.guild.id}_${user.id}_channelcreate`)
  db.delete(`executer_${message.guild.id}_${user.id}_channeldelete`)
  return message.channel.send(`Kişi limitleri değiştirildi`);
  }
   if(cmd.toLowerCase() === 'ceza') {
     let argsp = args[1];
     let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
     .setColor('#4b73e9')
      .setDescription(`
    Ceza listesi:
      **kick**,**roleremove**,**ban**
      `)
      .setFooter(message.guild.name, guildicon)
  
     if(!argsp) return message.channel.send(embed)
  
     if(argsp.toLowerCase() === 'kick') {
  let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setColor('#4b73e9')
      .setDescription(`Yeni ceza: **Kick**`)
      .setFooter(message.guild.name, guildicon)
  db.set(`punishment_${message.guild.id}`, 'kick')
  return message.channel.send(embed)
     }
     if(argsp.toLowerCase() === 'ban') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setColor('#4b73e9')
      .setDescription(`Yeni ceza: **ban**`)
      .setFooter(message.guild.name, guildicon)
  db.set(`punishment_${message.guild.id}`, 'ban')
  return message.channel.send(embed)
     }
    if(argsp.toLowerCase() === 'roleremove') {
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setColor('#4b73e9')
      .setDescription(`Yeni ceza: **roleremove**`)
      .setFooter(message.guild.name, guildicon)
  db.set(`punishment_${message.guild.id}`, 'roleremove')
  return message.channel.send(embed)    

    }}}}
      
  }
      )



     }   else {
      const DBL = require("dblapi.js");
      const emirhan = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczMzcyMDMyNjY0Njc5MjI2MyIsImJvdCI6dHJ1ZSwiaWF0IjoxNjExNzU3MjY2fQ.HefFKmQOjXErzGU-kwpma-3wE7pTOI-Gor_MT69j5fA', client);
     const ananen = new Discord.MessageEmbed()
      .setTitle("Error!")
      .setColor("RED")
      .setDescription("You will need to vote in order to use this, as it takes up alot of power to compute. Dont worry, after you are done setting up you wont have to vote again!")
      .addField("Beware!", "It may take a few seconds before the post-birds send us your vote")
      .addField("In order to vote:", `[Click Me!](https://top.gg/bot/733720326646792263/vote)`)
      .setFooter('nether')

      emirhan.hasVoted(message.author.id).then(voted => { 
        if (!voted) {
            message.channel.send(ananen)
  
  
  
        } else {
      if(message.author.id === message.guild.ownerID) {    

    const guildicon = message.guild.iconURL();
    if(!cmd) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag,message.author.displayAvatarURL())
        .setColor('#4b73e9')
          .setImage(`https://cdn.discordapp.com/attachments/754581545158836275/773252937928671272/output-onlinepngtools_3_1.png`)
        .setDescription(`
        » ** Role Protection**
        ${mainprefix}config setrolecreatelimit <number>
       ${mainprefix}config setroledeletelimit <number>  
 
        » ** Channel Protection**
         ${mainprefix}config setchannelcreatelimit <number>
         ${mainprefix}config setchanneldeletelimit <number>

       » ** Members Protection**
         ${mainprefix}config setbanlimits <number>
         ${mainprefix}config setkicklimits <number>
    
        » ** Others Protections**
        ${mainprefix}config setactionlogs <#channel>
        ${mainprefix}config clearuser @user
        ${mainprefix}config show
        ${mainprefix}config setpunishment <roleremove/kick/ban>

        » ** Whitelisting**
        ${mainprefix}whitelist
     `)
 .setFooter(message.guild.name, guildicon)
  return message.channel.send(embed);
}
 if(cmd.toLowerCase() === 'show') {
   let rolelimit = db.get(`rolecreatelimit_${message.guild.id}`) 
   if(rolelimit === null) rolelimit = "Disabled :x:"
   let roledelete = db.get(`roledeletelimits_${message.guild.id}`) 
   if(roledelete === null) roledelete = "Disabled :x:"
   let logschannel = db.get(`acitonslogs_${message.guild.id}`)
   let logschannel2 = db.get(`acitonslogs_${message.guild.id}`)
   if(logschannel === null) logschannel = "Disabled :x:"
   else logschannel = `<#${logschannel2}>`
   let channelcreatelimits = db.get(`channelcreatelimits_${message.guild.id}`)
   if(channelcreatelimits === null) channelcreatelimits = "Disabled :x:"
   let channeldeletelimits = db.get(`channeldeletelimits_${message.guild.id}`)
   if(channeldeletelimits === null) channeldeletelimits = "Disabled :x:"
   let banlimits = db.get(`banlimits_${message.guild.id}`)
  if(banlimits === null) banlimits = "Disabled :x:"
  let kicklimits = db.get(`kicklimits_${message.guild.id}`)
  if(kicklimits === null) kicklimits = "Disabled :x:"
  let punishment = db.get(`punishment_${message.guild.id}`)
  if(dpunishment === null) dpunishment = "None"
  if(punishment === null) punishment = dpunishment
   let showembebd = new Discord.MessageEmbed()

   .setAuthor(message.author.username, message.author.displayAvatarURL())
     .setImage(`https://cdn.discordapp.com/attachments/754581545158836275/773252937928671272/output-onlinepngtools_3_1.png`)
   .setColor('#4b73e9')
   .setTitle(`⚙️ ${message.guild.name} antiraid   `)
   .addField('Role Create limits', rolelimit, true)
   .addField('Role Delete limits', roledelete, true)
   .addField(`Aciton Logs Channel`, logschannel, true)
   .addField(`Channel Create limits`, channelcreatelimits, true)
   .addField(`Channel Delete limits`, channeldeletelimits, true)
   .addField(`Ban limits`, banlimits, true)
   .addField(`Kick limits`, kicklimits, true)
   .addField(`Punishment`, punishment, true)
    .setFooter(message.guild.name, guildicon)
    return message.channel.send(showembebd);
 }
 if(cmd.toLowerCase() === 'setrolecreatelimit') {
let rolecreate = args.slice(1).join(" ");
if(!rolecreate) {
 let missing = new Discord.MessageEmbed()
 .setAuthor(message.author.username, message.author.displayAvatarURL())
 .setDescription(`** an invaild usage**\nantiraid setrolecreatelimit (number)`)
 .setFooter(message.guild.name, guildicon)

  return message.channel.send(missing);
}
if(isNaN(rolecreate)) {
  let missing = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setColor('#4b73e9')
  .setDescription(`** an invaild usage (Cannot be words only numbers)**\nantiraid setrolecreatelimit (number)`)
  .setFooter(message.guild.name, guildicon)
return message.channel.send(missing);
}
db.set(`rolecreatelimit_${message.guild.id}`, rolecreate)
let done = new Discord.MessageEmbed() 
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setColor('#4b73e9')
.setDescription(`Done SetRoleCreation limits Has Been Set To ${rolecreate} ✅`)
.setFooter(message.guild.name, guildicon)
return message.channel.send(done);
}
if(cmd.toLowerCase() === 'setroledeletelimit') {
  let roledelete = args.slice(1).join(" ");
  if(!roledelete) {
   let missing = new Discord.MessageEmbed()
   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setColor('#4b73e9')
   .setDescription(`** an invaild usage**\nantiraid setroledeletelimit (number)`)
   .setFooter(message.guild.name, guildicon)
  
    return message.channel.send(missing);
  }
  if(isNaN(roledelete)) {
    let missing = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor('#4b73e9')
    .setDescription(`** an invaild usage (Cannot be words only numbers)**\nantiraid setroledeletelimit (number)`)
    .setFooter(message.guild.name, guildicon)
  return message.channel.send(missing);
  }
  db.set(`roledeletelimits_${message.guild.id}`, roledelete)
  let done = new Discord.MessageEmbed() 
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setColor('#4b73e9')
  .setDescription(`Done SetRoleDelete limits Has Been Set To ${roledelete} ✅`)
  .setFooter(message.guild.name, guildicon)
  return message.channel.send(done);
  
}
if(cmd.toLowerCase() === 'setactionlogs') {
  let logs = message.mentions.channels.first();
  if(!logs) {
  let logsembed = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setColor('#4b73e9')
  .setDescription(`Please Mention an vaild channel`)
  .setFooter(message.guild.name, guildicon)
return message.channel.send(logsembed);
}
logs.send(`** Anit-Raid Logs Room **`)
db.set(`acitonslogs_${message.guild.id}`, logs.id)
let done = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setColor('#4b73e9')
.setDescription(`well done aciton-logs channel has been set to ${logs}`)
.setFooter(message.guild.name, guildicon)
return message.channel.send(done)
}
if(cmd.toLowerCase() === 'setchannelcreatelimit') {
  let rolecreate = args.slice(1).join(" ");
  if(!rolecreate) {
   let missing = new Discord.MessageEmbed()
   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setColor('#4b73e9')
   .setDescription(`** an invaild usage**\nantiraid setchannelcreatelimit (number)`)
   .setFooter(message.guild.name, guildicon)
  
    return message.channel.send(missing);
  }
  if(isNaN(rolecreate)) {
    let missing = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription(`** an invaild usage (Cannot be words only numbers)**\nantiraid setchannelcreatelimit (number)`)
    .setFooter(message.guild.name, guildicon)
  return message.channel.send(missing);
  }
  db.set(`channelcreatelimits_${message.guild.id}`, rolecreate)
  let done = new Discord.MessageEmbed() 
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setColor('#4b73e9')
  .setDescription(`Done Channel Create limits Has Been Set To ${rolecreate} ✅`)
  .setFooter(message.guild.name, guildicon)
  return message.channel.send(done);
}
if(cmd.toLowerCase() === 'setchanneldeletelimit') {
  let rolecreate = args.slice(1).join(" ");
  if(!rolecreate) {
   let missing = new Discord.MessageEmbed()
   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setColor('#4b73e9')
   .setDescription(`** an invaild usage**\nantiraid setchanneldeletelimit (number)`)
   .setFooter(message.guild.name, guildicon)
  
    return message.channel.send(missing);
  }
  if(isNaN(rolecreate)) {
    let missing = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor('#4b73e9')
    .setDescription(`** an invaild usage (Cannot be words only numbers)**\nantiraid setchanneldeletelimit (number)`)
    .setFooter(message.guild.name, guildicon)
  return message.channel.send(missing);
  }
  db.set(`channeldeletelimits_${message.guild.id}`, rolecreate)
  let done = new Discord.MessageEmbed() 
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setColor('#4b73e9')
  .setDescription(`Done Channel Delete limits Has Been Set To ${rolecreate} ✅`)
  .setFooter(message.guild.name, guildicon)
  return message.channel.send(done);
}
if(cmd.toLowerCase() === 'setbanlimits') {
  let rolecreate = args.slice(1).join(" ");
  if(!rolecreate) {
   let missing = new Discord.MessageEmbed()
   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setColor('#4b73e9')
   .setDescription(`** an invaild usage**\nantiraid setbanlimit (number)`)
   .setFooter(message.guild.name, guildicon)
  
    return message.channel.send(missing);
  }
  if(isNaN(rolecreate)) {
    let missing = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor('#4b73e9')
    .setDescription(`** an invaild usage (Cannot be words only numbers)**\nantiraid setbanlimit (number)`)
    .setFooter(message.guild.name, guildicon)
  return message.channel.send(missing);
  }
  db.set(`banlimits_${message.guild.id}`, rolecreate)
  let done = new Discord.MessageEmbed() 
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setColor('#4b73e9')
  .setDescription(`Done Ban limits Has Been Set To ${rolecreate} ✅`)
  .setFooter(message.guild.name, guildicon)
  return message.channel.send(done);
}
if(cmd.toLowerCase() === 'setkicklimits') {
  let rolecreate = args.slice(1).join(" ");
  if(!rolecreate) {
   let missing = new Discord.MessageEmbed()
   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setColor('#4b73e9')
   .setDescription(`** an invaild usage**\nantiraid setbanlimit (number)`)
   .setFooter(message.guild.name, guildicon)
  
    return message.channel.send(missing);
  }
  if(isNaN(rolecreate)) {
    let missing = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor('#4b73e9')
    .setDescription(`** an invaild usage (Cannot be words only numbers)**\nantiraid setkicklimit (number)`)
    .setFooter(message.guild.name, guildicon)
  return message.channel.send(missing);
  }
  db.set(`kicklimits_${message.guild.id}`, rolecreate)
  let done = new Discord.MessageEmbed() 
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setColor('#4b73e9')
  .setDescription(`Done Kick limits Has Been Set To ${rolecreate} ✅`)
  .setFooter(message.guild.name, guildicon)
  return message.channel.send(done);
}
if(cmd.toLowerCase() === 'clearuser') {
  let user = message.mentions.users.first()
if(!user) {
  return message.channel.send(`** Mention User **`);
}
db.delete(`executer_${message.guild.id}_${user.id}_kicklimits`) 
db.delete(`executer_${message.guild.id}_${user.id}_banlimits`)
db.delete(`executer_${message.guild.id}_${user.id}_rolecreate`)
db.delete(`executer_${message.guild.id}_${user.id}_roledelete`)
db.delete(`executer_${message.guild.id}_${user.id}_channelcreate`)
db.delete(`executer_${message.guild.id}_${user.id}_channeldelete`)
return message.channel.send(`Reseted User limits`);
}
 if(cmd.toLowerCase() === 'setpunishment') {
   let argsp = args[1];
   let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setColor('#4b73e9')
    .setDescription(`
    Punishment List:
    **kick**,**roleremove**,**ban**
    `)
    .setFooter(message.guild.name, guildicon)

   if(!argsp) return message.channel.send(embed)

   if(argsp.toLowerCase() === 'kick') {
let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
.setColor('#4b73e9')
    .setDescription(`Punishment Was Changed to **Kick**`)
    .setFooter(message.guild.name, guildicon)
db.set(`punishment_${message.guild.id}`, 'kick')
return message.channel.send(embed)
   }
   if(argsp.toLowerCase() === 'ban') {
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor('#4b73e9')
    .setDescription(`Punishment Was Changed to **ban**`)
    .setFooter(message.guild.name, guildicon)
db.set(`punishment_${message.guild.id}`, 'ban')
return message.channel.send(embed)
   }
  if(argsp.toLowerCase() === 'roleremove') {
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor('#4b73e9')
    .setDescription(`Punishment Was Changed to **roleremove**`)
    .setFooter(message.guild.name, guildicon)
db.set(`punishment_${message.guild.id}`, 'roleremove')
return message.channel.send(embed)

  }}
}
   }}
      )}}}


















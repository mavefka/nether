const Discord = require("discord.js");
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const chalk = require("chalk");
const moment = require("moment");
const db = require("quick.db");
const client = new Discord.Client();
const ms = require("ms");
require("./util/eventLoader")(client);





    const log = message => {
      console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
    };
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
    fs.readdir("./komutlar/", (err, files) => {
       if (err) console.error(err);
       files.forEach(f => {
     fs.readdir(`./komutlar/${f}/`, (err, filess) => {
       if (err) console.error(err);
       log(`${f} Klasöründen ${filess.length} Komut Yüklenecek;`);
       filess.forEach(fs => {
         let props = require(`./komutlar/${f}/${fs}`);
         log(`${props.help.name} // Yüklendi`);
         client.commands.set(props.help.name, props);
         props.conf.aliases.forEach(alias => {
           client.aliases.set(alias, props.help.name);
         });
        });
       });
      });
     });
    





    client.elevation = message => {
      if (!message.guild) {
        return;
      }
      let permlvl = 0;
      if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
      if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
      if (message.author.id === ayarlar.sahip) permlvl = 4;
      return permlvl;
    };


client.login(ayarlar.token)


const emmmmbed = new Discord.MessageEmbed()
.setColor('BLUE')
.setTitle('Hello, welcome!')
.setDescription(`
Hey there, thanks for adding nether to your server <a:EFB_Campfire_Crackling:793017376898809879>
Now, in order to begin using the bot in your server type in \`n!help\`
this command will guide you to using the bot most sucsessfuly.

**So, what can Nether do?**
Alot, really. You can play games using Nether, search up your media or...
protect your server, Nether is the satan after all it can destroy everyone with bad intentions!
`)
.addField(`Support Server: (Join-Me)[https://discord.gg/faWZjD8b6K]`)
client.on("guildCreate", guild => {

let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
if(channel.type == "text" && defaultChannel == "") {
if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
defaultChannel = channel;
}
}
})

defaultChannel.send(emmmmbed)

});



client.on("message", (message) => { 
  
  let kontrol =  db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "tr") {
  

const xdxd1 = message.author.id
  const goldUyeler1 = db.has(`üyelikk_${message.author.id}`)
  const goldUyeler = goldUyeler1
  if(db.has(`üyelikk_${message.author.id}`)  && (!db.has(`goldbildirim.${message.author.id}`) || (db.get(`goldbildirim.${message.author.id}`) + (1 * 60 * 60 * 1000)) < Date.now())) {
    const embed = new Discord.MessageEmbed();
    embed.setDescription("<:gold1:799972834487042048> Sıkı Durun Bir Nether Blazing Üyesi Belirdi <@" + message.author.id + ">");
    embed.setColor('GOLD');
    message.channel.send(embed).then((msg) => msg.delete({timeout: 9000}));
    db.set(`goldbildirim.${message.author.id}`, Date.now());
  }


} else {
  const xdxd1 = message.author.id
  const goldUyeler1 = db.has(`üyelikk_${message.author.id}`)
  const goldUyeler = goldUyeler1                                                                                                          // 60 60 1000
  if(db.has(`üyelikk_${message.author.id}`)  && (!db.has(`goldbildirim.${message.author.id}`) || (db.get(`goldbildirim.${message.author.id}`) + (1 * 60* 60 * 1000)) < Date.now())) {
    const embed = new Discord.MessageEmbed();
    embed.setDescription("<:gold1:799972834487042048> Hold tight! I can see a Nether Blazing user! <@" + message.author.id + ">");
    embed.setColor('GOLD');
    message.channel.send(embed).then((msg) => msg.delete({timeout: 9000}));
    db.set(`goldbildirim.${message.author.id}`, Date.now());
  }
} } )



client.on("message", async msg => {

    let saas = await db.fetch(`saas_${msg.guild.id}`);
  
    if (saas == 'kapali') return;
  
    if (saas == 'acik') {
  
    if (msg.content.toLowerCase() === 'sa') {
  
      msg.reply(new Discord.MessageEmbed() .setDescription('ve aleykum selam!') .setColor('BLUE'));
  
    }
  
    }

  })

  client.on("message", async (message) => {
    if (!message.guild || message.author.bot) return;


});



client.on("message", async msg => {

let kontrol = await db.fetch(`dil_${msg.guild.id}`);
if (kontrol == "tr") {


  
  
    const i = await db.fetch(`kufur_${msg.guild.id}`)
       if (i == "acik") {
           const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
           if (kufur.some(word => msg.content.includes(word))) {
             try {
               if (!msg.member.hasPermission("BAN_MEMBERS")) {
                     msg.delete();
                             
                         return msg.reply(new Discord.MessageEmbed() .setDescription('Bu sunucuda küfür filtresi var. Küfür edemezsin') .setColor('BLUE'))

               }              
             } catch(err) {
             }
           }
       }
       if (!i) return;
   
   
   client.on("messageUpdate", (oldMessage, newMessage) => {
     
     
    const i = db.fetch(`${oldMessage.guild.id}.kufur`)
       if (i) {
           const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
           if (kufur.some(word => newMessage.content.includes(word))) {
             try {
               if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
                     oldMessage.delete();
                             
                         return oldMessage.reply(new Discord.MessageEmbed() .setDescription('Bu sunucuda küfür filtresi var, küfür edemezsin.') .setColor('BLUE'))
               }              
             } catch(err) {
          
             }
           }
       }
       if (!i) return;
   });
  


  } else {


  client.on("message", async msg => {
  
  
    const i = await db.fetch(`kufur_${msg.guild.id}`)
       if (i == "acik") {
           const kufur = ["fuck", "fucker", "asshole", "shit", "ass", "cock", "dick", "pussy", "pusy", "prick", "cunt", "sex", "whore", "slut", "Bukkake", "sucker"];
           if (kufur.some(word => msg.content.includes(word))) {
             try {
               if (!msg.member.hasPermission("BAN_MEMBERS")) {
                     msg.delete();
                             
                         return msg.reply(new Discord.MessageEmbed() .setDescription('You cannot curse in this server.') .setColor('BLUE'))
               }              
             } catch(err) {
             }
           }
       }
       if (!i) return;
   });
   
   client.on("messageUpdate", (oldMessage, newMessage) => {
     
     
    const i = db.fetch(`${oldMessage.guild.id}.kufur`)
       if (i) {
        const kufur = ["fuck", "fucker", "asshole", "shit", "ass", "cock", "dick", "pussy", "pusy", "prick", "cunt", "sex", "whore", "slut", "Bukkake", "sucker"];
        if (kufur.some(word => newMessage.content.includes(word))) {
             try {
               if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
                     oldMessage.delete();
                             
                         return oldMessage.reply(new Discord.MessageEmbed() .setDescription('You cannot curse in this server.') .setColor('BLUE'))
               }              
             } catch(err) {
             }
           }
       }
       if (!i) return;
   });








}




})



//capslocko
function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
} 

client.on('message', async msg => {
  message = msg
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "tr") {
if (!message.guild) return
let acikmi = await db.fetch(`${message.guild.id}.capsengel`)
if (!acikmi) return
if (message.author.bot) return
if (message.member.hasPermission("MANAGE_MESSAGES")) return
let matched = message.content.replace(/[^A-Z]/g, "").length
let yuzde = percentage(matched, message.content.length)
if (Math.round(yuzde) > acikmi.yuzde) {
 message.delete()
 message.author.send(new Discord.MessageEmbed().setColor("RED").setTimestamp().setFooter(`${message.guild.name}`,message.guild.iconURL({dynamic:true})).setAuthor("CapsLock").setDescription("**Uyarı! "+message.guild.name+" sunucusunda büyük harfle yazma engeli bulunmaktadır!**\nBu sebepten göndermiş olduğunuz mesaj silindi."))
 message.channel.send(new Discord.MessageEmbed().setColor("RED").setTimestamp().setFooter(`${message.guild.name}`,message.guild.iconURL({dynamic:true})).setAuthor("CapsLock",message.author.displayAvatarURL({dynamic:true})).setDescription(message.author.username+" - "+(message.member.nickname ? `${message.member.nickname} - ${message.author.id}` : message.author.id)+"\n**Uyarı!  Bu sunucuda büyük harfle yazma engeli bulunmaktadır!**\nBu sebepten göndermiş olduğunuz mesaj silindi.")).then(message=>message.delete({timeout:3000}))
}else{return}
}else {if (!message.guild) return
  let acikmi = await db.fetch(`${message.guild.id}.capsengel`)
  if (!acikmi) return
  if (message.author.bot) return
  if (message.member.hasPermission("MANAGE_MESSAGES")) return
  let matched = message.content.replace(/[^A-Z]/g, "").length
  let yuzde = percentage(matched, message.content.length)
  if (Math.round(yuzde) > acikmi.yuzde) {//msg
   message.delete()
   message.author.send(new Discord.MessageEmbed().setColor("RED").setTimestamp().setFooter(`${message.guild.name}`,message.guild.iconURL({dynamic:true})).setAuthor("CapsLock").setDescription("**Warning for u! "+message.guild.name+" These people here really do not enjoy it when you shout\nThey made me do this by force, sorry:("))
   message.channel.send(new Discord.MessageEmbed().setColor("RED").setTimestamp().setFooter(`${message.guild.name}`,message.guild.iconURL({dynamic:true})).setAuthor("CapsLock",message.author.displayAvatarURL({dynamic:true})).setDescription(message.author.username+" - "+(message.member.nickname ? `${message.member.nickname} - ${message.author.id}` : message.author.id)+"\nHey mate, this people really hate it when people shout\nSorry for deleting your message.")).then(message=>message.delete({timeout:3000}))
  }else{return}}

  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
  
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){


    const afk12 = new Discord.MessageEmbed()
    .setDescription(`Etiketlediğin kişi şu anda afk bulunuyor\nSebep: ${sebep}`)
    .setColor('BLUE');
       msg.reply(afk12)
    
   
 }
  if(msg.author.id === kisi){
    const afk13 = new Discord.MessageEmbed()
    .setDescription(`Afklıktan çıktınız`)
    .setColor('BLUE')
     


       msg.reply(afk13)
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }} else {
    const afk = msg.mentions.users.first()
    const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
    const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
   if(afk){
     const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
     const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
     

    if(!msg.guild) return;
    if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
    
  
    

   if(afk){

     if(msg.content.includes(kisi3)){
  
  
      const afk15 = new Discord.MessageEmbed()
      .setDescription(`The person you tagged is currently afk\nReasoning: ${sebep}`)
      .setColor('BLUE');
         msg.reply(afk15)
     }
   }
    if(msg.author.id === kisi){
      const afk16 = new Discord.MessageEmbed()
      .setDescription(`You are no longer afk`)
      .setColor('BLUE')
       
  
  
         msg.reply(afk16)
     db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
     db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
     db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
      msg.member.setNickname(isim)
      



  }}
  
  };

  var mayfe = await db.fetch(`reklam_${msg.guild.id}`)
     if (mayfe == 'acik') {
         const birisireklammidedi = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
         if (birisireklammidedi.some(word => msg.content.includes(word))) {
           try {
             if (!msg.member.hasPermission("BAN_MEMBERS")) {
                   msg.delete();
                     return msg.reply('Unauthorized').then(msg => msg.delete(3000));
     
 
   msg.delete(3000);                              
 
             }              
           } catch(err) {
           }
         }
     }
     else if (mayfe == 'kapali') {
       
     }
     if (!mayfe) return;
   })

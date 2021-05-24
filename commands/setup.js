const Discord = require('discord.js')
const db = require('quick.db')
const yaml = require("js-yaml");
const { truncate } = require("fs");
const fs = require('fs')
const { mainprefix , token , status , dpunishment } = yaml.load(fs.readFileSync("./antiraid.yml"));

module.exports = {
    name: "antiraid",
    description: "deneme kodudur",
    run: async (client, message, args) => {



        let p = args[0];
        let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || `n!`
      let onlycode = args.slice(0).join(' ');
      
      let kontrol = await db.fetch(`dil_${message.guild.id}`);
      if (kontrol == "tr") {


      let eklenti = new Discord.MessageEmbed()  
      .setAuthor(`NETHER BEYAZLİSTE`)
      .setColor('#4b73e9')
      .setDescription(`Hadi insanları beyazlistene ekleyelim!`)  
      .addField(`__Beyazlistendekilere bak__`,`🌪 Beyazlistendekilere bakmak için! \`${prefix}list\` `,true)
      .addField(`__BeyazListeyi Kontrol et__`,`🤹 \`${prefix}add\` | Birini beyazlisteye ekle \n🎭 \`${prefix}delete\` | Insanları beyazlisteden kaldır `)
      .setImage(`https://cdn.discordapp.com/attachments/754581545158836275/773252937928671272/output-onlinepngtools_3_1.png`)



        const filter = (reaction, user) => {
            return ["🧩", "🎨", "🥇", "🤹"].includes(reaction.emoji.name) && user.id === message.author.id && reaction.users.remove(message.author.id);
          };
          
            const antiraid = new Discord.MessageEmbed()
            .setColor('#4b73e9')
            .setTitle(`<a:acrown:793741637271945276> ${message.guild.name}'s antiraid menu   `)
            .setDescription(`
            **<a:3119_Setting:783225339504754709> Rol Koruma**
            ${prefix}config rolkurmalimiti <sayı>
            ${prefix}config rolsilmelimiti <sayı>
            
            **<a:3119_Setting:783225339504754709> Kanal koruma**
            ${prefix}config kanalkurmalimiti <sayı>
            ${prefix}config kanalsilmelimiti <sayı>
            
            **<a:3119_Setting:783225339504754709> Üye Koruma**
            ${prefix}config banlimiti <sayı>
            ${prefix}config kicklimiti <sayı>
            
            **<a:3119_Setting:783225339504754709> Diğer Ayarlar**
            ${prefix}config logkanal <#kanal>
            ${prefix}config temizle @kişi
            ${prefix}config göster
            ${prefix}config ceza <roleremove/kick/ban>

     `)



     const basla = new Discord.MessageEmbed()
.setColor("BLUE")
.setTitle(`<a:acrown:793741637271945276> Nether Antiraid Manager   `)
.setDescription(`
**Başlayalım!**
Selamlar, Nether harikalıklarla dolu bir bot olsada şahsen favorim herşeyin kolay ve erişebilir olması.
 Bu menüden sunucunun antiraidi ile ilgili her şeyi ayarlayabilirsin
**Nasıl Kullanılır?**
  Basit, her emoji farklı bir menüye işaret eder, **🧩** antiraid ayarlarını gösterir,
  **🎨** Açıp/kapatacabileceğin ayarları gösterir, 🤹 Beyazliste menüsünü gösterir 
  ve **🥇** emojiside seni buraya geri getirir.

  **Neler Eklendi?**
  \`\`\`
                 🎉  Eğelence Güncellemesi 🎉
      Nether beta 0.2 yada diğer adıyla Eğelence Güncellemesi
            sonunda çıktı, bu güncelleme ile gelenler;

-yepyeni eğelence komutları
-xp/seviye sistemi (sonunda!)
-github ve reddit komutları
-En iyi performans için yenilikler
-Yepyeni antiraid menüsü\`\`\`
`)

            var menü = await message.channel.send(basla)


           const collector = menü.createReactionCollector(filter, { time: 99999 });
            let emojiler = ["🧩", "🎨", "🤹", "🥇"]
            await menü.react(emojiler[0])
            await menü.react(emojiler[1])
            await menü.react(emojiler[2])
            await menü.react(emojiler[3])
          
          collector.on('collect', (reaction, user) => {
          
            
               if(reaction.emoji.name == "🧩") {

                //db values
            
              let rolelimit = db.get(`rolecreatelimit_${message.guild.id}`) 
              if(rolelimit === null) rolelimit = "Kapalı <:altincarpi:789022532426268694>"
              let roledelete = db.get(`roledeletelimits_${message.guild.id}`) 
              if(roledelete === null) roledelete = "Kapalı <:altincarpi:789022532426268694>"
              let logschannel = db.get(`acitonslogs_${message.guild.id}`)
              let logschannel2 = db.get(`acitonslogs_${message.guild.id}`)
              if(logschannel === null) logschannel = "Kapalı <:altincarpi:789022532426268694>"
              else logschannel = `<#${logschannel2}>`
              let channelcreatelimits = db.get(`channelcreatelimits_${message.guild.id}`)
              if(channelcreatelimits === null) channelcreatelimits = "Kapalı <:altincarpi:789022532426268694>"
              let channeldeletelimits = db.get(`channeldeletelimits_${message.guild.id}`)
              if(channeldeletelimits === null) channeldeletelimits = "Kapalı <:altincarpi:789022532426268694>"
              let banlimits = db.get(`banlimits_${message.guild.id}`)
             if(banlimits === null) banlimits = "Kapalı <:altincarpi:789022532426268694>"
             let kicklimits = db.get(`kicklimits_${message.guild.id}`)
             if(kicklimits === null) kicklimits = "Kapalı <:altincarpi:789022532426268694>"
             let punishment = db.get(`punishment_${message.guild.id}`)
             if(dpunishment === null) dpunishment = "None"
             if(punishment === null) punishment = dpunishment //takma bunları

                //db vaules end
                const guildicon = message.guild.iconURL();
               
            
                const kobscode = new Discord.MessageEmbed()
                .setImage(`https://cdn.discordapp.com/attachments/754581545158836275/773252937928671272/output-onlinepngtools_3_1.png`)
              .setColor('#4b73e9')
              .setTitle(`<a:acrown:793741637271945276> ${message.guild.name}'s antiraid options   `)
              .addField('Rol Oluşturma Limiti', rolelimit, true)
              .addField('Rol Silme Limiti', roledelete, true)
              .addField(`Sunucu Log Kanalı`, logschannel, true)
              .addField(`Kanal Oluşturma Limiti`, channelcreatelimits, true)
              .addField(`Kanal Silme Limiti`, channeldeletelimits, true)
              .addField(`Ban limiti`, banlimits, true)
              .addField(`Kick Limiti`, kicklimits, true)
              .addField(`Verilecek Ceza`, punishment, true)


           menü.edit(kobscode)
            }
           if(reaction.emoji.name == "🎨") {



           menü.edit(antiraid)
            }

    



            if(reaction.emoji.name == "🤹") {



                menü.edit(eklenti)
                 }
     



            if(reaction.emoji.name == "🥇") {



                menü.edit(basla)
                 }




          });
          
          collector.on('end', collected => {
           
          });
          
        } else {

            let eklenti = new Discord.MessageEmbed()  
            .setAuthor(`NETHER WHITELIST`)
            .setColor('#4b73e9')
            .setDescription(`Lets help you whitelist users!`)  
            .addField(`__Take a look at your whitelsit__`,`🌪 Check everyone who is whitelisted! \`${prefix}list\` `,true)
            .addField(`__Manage the whitelist__`,`🤹 \`${prefix}add\` | Add someone to the whitelist \n🎭 \`${prefix}delete\` | Remove users from whitelist `)
            .setImage(`https://cdn.discordapp.com/attachments/754581545158836275/773252937928671272/output-onlinepngtools_3_1.png`)
      
      
      
              const filter = (reaction, user) => {
                  return ["🧩", "🎨", "🥇", "🤹"].includes(reaction.emoji.name) && user.id === message.author.id && reaction.users.remove(message.author.id);
                };
                
                  const antiraid = new Discord.MessageEmbed()
                  .setColor('#4b73e9')
                  .setTitle(`<a:acrown:793741637271945276> ${message.guild.name}'s antiraid menu   `)
                  .setDescription(`
        **<a:3119_Setting:783225339504754709> Role Protection**
              ${prefix}config setrolecreatelimit <number>
             ${prefix}config setroledeletelimit <number>  
       
          **<a:3119_Setting:783225339504754709> Channel Protection**
               ${prefix}config setchannelcreatelimit <number>
               ${prefix}config setchanneldeletelimit <number>
      
        **<a:3119_Setting:783225339504754709> Members Protection**
               ${prefix}config setbanlimits <number>
               ${prefix}config setkicklimits <number>
          
       **<a:3119_Setting:783225339504754709> Others Protections**
              ${prefix}config setactionlogs <#channel>
              ${prefix}config clearuser @user
              ${prefix}config setpunishment <roleremove/kick/ban>
      
           `)
      
      
      
           const basla = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle(`<a:acrown:793741637271945276> Nether Antiraid Manager   `)
      .setDescription(`
      **Introduction**
        Hello there! Nether is a bot with many wonders but personally I love it to do everything from a single menu.
        **How To Use?**
        Well every reaction is a new menu, **🧩** will show you your current settings,
        **🎨** will show you settings you can turn on/off, 🤹 will open up the whitelisting 
        menu and **🥇** will bring you back here.
      
        **Whats New?**
        \`\`\`
                🎉  The Update Of Fun 🎉
     Nether beta 0.2 a.k.a The Update Of Fun is here!
                    What comes with it?
      
-brand new fun based commands
-xp system (finnialy!)
-github and reddit intergration
-better optimization for the best performance
-brand new dropdown setup menu\`\`\`
      `)
      
                  var menü = await message.channel.send(basla)
      
      
                 const collector = menü.createReactionCollector(filter, { time: 99999 });
                  let emojiler = ["🧩", "🎨", "🤹", "🥇"]
                  await menü.react(emojiler[0])
                  await menü.react(emojiler[1])
                  await menü.react(emojiler[2])
                  await menü.react(emojiler[3])
                
                collector.on('collect', (reaction, user) => {
                
                  
                     if(reaction.emoji.name == "🧩") {
      
                      //db values
                  
                    let rolelimit = db.get(`rolecreatelimit_${message.guild.id}`) 
                    if(rolelimit === null) rolelimit = "Disabled <:altincarpi:789022532426268694>"
                    let roledelete = db.get(`roledeletelimits_${message.guild.id}`) 
                    if(roledelete === null) roledelete = "Disabled <:altincarpi:789022532426268694>"
                    let logschannel = db.get(`acitonslogs_${message.guild.id}`)
                    let logschannel2 = db.get(`acitonslogs_${message.guild.id}`)
                    if(logschannel === null) logschannel = "Disabled <:altincarpi:789022532426268694>"
                    else logschannel = `<#${logschannel2}>`
                    let channelcreatelimits = db.get(`channelcreatelimits_${message.guild.id}`)
                    if(channelcreatelimits === null) channelcreatelimits = "Disabled <:altincarpi:789022532426268694>"
                    let channeldeletelimits = db.get(`channeldeletelimits_${message.guild.id}`)
                    if(channeldeletelimits === null) channeldeletelimits = "Disabled <:altincarpi:789022532426268694>"
                    let banlimits = db.get(`banlimits_${message.guild.id}`)
                   if(banlimits === null) banlimits = "Disabled <:altincarpi:789022532426268694>"
                   let kicklimits = db.get(`kicklimits_${message.guild.id}`)
                   if(kicklimits === null) kicklimits = "Disabled <:altincarpi:789022532426268694>"
                   let punishment = db.get(`punishment_${message.guild.id}`)
                   if(dpunishment === null) dpunishment = "None"
                   if(punishment === null) punishment = dpunishment //takma bunları
      
                      //db vaules end
                      const guildicon = message.guild.iconURL();
                     
                  
                      const kobscode = new Discord.MessageEmbed()
                      .setImage(`https://cdn.discordapp.com/attachments/754581545158836275/773252937928671272/output-onlinepngtools_3_1.png`)
                    .setColor('#4b73e9')
                    .setTitle(`<a:acrown:793741637271945276> ${message.guild.name}'s antiraid options   `)
                    .addField('Role Createation Limit', rolelimit, true)
                    .addField('Role Delete limits', roledelete, true)
                    .addField(`Aciton Logs Channel`, logschannel, true)
                    .addField(`Channel Createation limits`, channelcreatelimits, true)
                    .addField(`Channel Delete limits`, channeldeletelimits, true)
                    .addField(`Ban limits`, banlimits, true)
                    .addField(`Kick limits`, kicklimits, true)
                    .addField(`Punishment`, punishment, true)
      
      
                 menü.edit(kobscode)
                  }
                 if(reaction.emoji.name == "🎨") {
      
      
      
                 menü.edit(antiraid)
                  }
      
          
      
      
      
                  if(reaction.emoji.name == "🤹") {
      
      
      
                      menü.edit(eklenti)
                       }
           
      
      
      
                  if(reaction.emoji.name == "🥇") {
      
      
      
                      menü.edit(basla)
                       }
      
      
      
      
                });
                
                collector.on('end', collected => {
                 
                });
        }
    }

        }
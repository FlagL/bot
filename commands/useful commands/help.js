const pagination = require('discord.js-pagination')

module.exports = {
  name: "help",
  aliases: ['command', 'commands'],
  cooldown: 5,
  description: ['Help command'],
  async execute(client, message, success, failed, args, Discord){

    const userAvatar = message.author.displayAvatarURL();
   
    const page1 = new Discord.MessageEmbed()
    .setTitle("Help")
    .setDescription("Actions")
    .setColor("#fAf334")
    .setFooter("=help")
    .addFields([
      { name: "Cuddle", value: "**Cuddle a user**", inline: false},
      { name: "Hug", value: "**Hug a user**", inline: false},
      { name: "Kiss", value: "**Kiss a user**", inline: false},
      { name: "Pat", value: "**Pat a user**", inline: false},
      { name: "Poke", value: "**Poke a user**", inline: false},
      { name: "Slap", value: "**Slap a user**", inline: false},
      { name: "Smug", value: "**Act smug**", inline: false},
      { name: "Tickle", value: "**Tickle a user**", inline: false},
    ])
    .setThumbnail(userAvatar)
    
    const page2 = new Discord.MessageEmbed()
    .setTitle("Help")
    .setDescription("Fun")
    .setColor("#fAf334")
    .setFooter("=help")
    .addFields([
      { name: "freenitro", value: "**Aliases: ['fn', 'nitro'] Totally legit nitro link finder**", inline: false},
      { name: "kill", value: "**Kill a user**", inline: false},
      { name: "suggestion", value: "**Aliases: ['suggestions', 'suggest', 'topics', 'topic'] Generate a random topic**", inline: false},
      { name: "textart", value: "**Aliases: ['ta', 'text'] Generate text art**", inline: false},
    ])
    .setThumbnail(userAvatar)

    const page3 = new Discord.MessageEmbed()
    .setTitle("Help")
    .setDescription("Games")
    .setColor("#fAf334")
    .setFooter("=help")
    .addFields([
      { name: "rps", value: "**Rock paper scissors command[Usage example: =rps r]**", inline: false},
      { name: "ttt", value: "**Tictactoe**", inline : false}
    ])
    .setThumbnail(userAvatar)

    const page4 = new Discord.MessageEmbed()
    .setTitle("Help")
    .setDescription("Misc")
    .setColor("#fAf334")
    .setFooter("=help")
    .addFields([
      { name: "image", value: "**Use an image scraper to get random image from google. Its slow so be patient**", inline: false},
      { name: "onlyfans", value: "**Aliases: ['onlyfan', 'of'] My onlyfans**", inline: false},
      { name: "ping", value: "**Test command. Get bot ping**", inline: false},
      { name: "zaz", value: "**No words needed**" , inline: false},
    ])
    .setThumbnail(userAvatar)

    const page5 = new Discord.MessageEmbed()
    .setTitle("Help")
    .setDescription("Mod")
    .setColor("#fAf334")
    .setFooter("=help")
    .addFields([
      { name: "clear", value: "**Aliases: ['purge'] Purge a certain number of messages**"}
    ])
    .setThumbnail(userAvatar)

    const page6 = new Discord.MessageEmbed()
    .setTitle("Help")
    .setDescription("Owner")
    .setColor("#fAf334")
    .setFooter("=help")
    .addFields([
      { name: "activity", value: "**Set bot activity**"}
    ])
    .setThumbnail(userAvatar)

    const page7 = new Discord.MessageEmbed()
    .setTitle("Help")
    .setDescription("Generators")
    .setColor("#fAf334")
    .setFooter("=help")
    .addFields([
      { name: "howhappy", value: "**Aliases: ['happy'] Random generator for how happy you are out of 100**", inline: false},
      { name: "howhorny", value: "**Aliases: ['horny'] Random generator for how horny you are out of 100**", inline: false},
      { name: "vibecheck", value: "**Aliases: ['vibe', 'vcheck'] Vibe check**"},
    ])
    .setThumbnail(userAvatar)

    const page8 = new Discord.MessageEmbed()
    .setTitle("Help")
    .setDescription("Server")
    .setColor("#fAf334")
    .setFooter("=help")
    .addFields([
      { name: "Membercount", value: "**Aliases: ['mc', 'mcount'] Get the member count of your guild**", inline: false},
      { name: "namecount", value: "**Aliases: ['nm', 'updatename'] Update user's name with server membercount[Requires bot to have nickname permission]**", inline: false},
      { name: "Status", value: "**Aliases: ['stat'] Show bot stats**", inline: false},
    ])
    .setThumbnail(userAvatar)

    const page9 = new Discord.MessageEmbed()
    .setTitle("Help")
    .setDescription("Useful")
    .setColor("#fAf334")
    .setFooter("=help")
    .addFields([
      { name: "Help", value: "Generate help page", inline: false},
      { name: "math", value: "**Run a calculation**", inline: false}
    ])
    .setThumbnail(userAvatar)

    const page10 = new Discord.MessageEmbed()
    .setTitle("Help")
    .setDescription("Settings")
    .setColor("#fAf334")
    .setFooter("=help")
    .addFields([
      { name: "setprefix", value: "**Aliases: ['prefix', 'sp']**", inline: false},
    ])
    .setThumbnail(userAvatar)

    const pages = [
      page1,
      page2,
      page3,
      page4,
      page5,
      page6,
      page7,
      page8,
      page9,
      page10
    ]

    const emoji = ['⏪', '⏩']

    const timeout = '60000'

    pagination(message, pages, emoji, timeout)
  }
}


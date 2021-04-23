const { DiscordAPIError } = require("discord.js")

module.exports = {
    name:'zaz',
    aliases: ['Zaz'],
    description:"zazzy",
    execute(client, message, success, failed, args, Discord){
        
        const zazEmbed = new Discord.MessageEmbed()
        .setTitle('Queen')
        .setDescription('No words needed')
        .setColor("PURPLE")
        .setImage('https://cdn.discordapp.com/attachments/803323610680000582/811611620051779594/princess.png')

        if(args = 'zaz'){
            message.reply(zazEmbed)
        }
    }
}
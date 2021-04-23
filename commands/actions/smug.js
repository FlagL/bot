const emotes = require('discord-emotes')

module.exports = {
    name: "smug",
    description: "Act smug",
    execute(client, message, success, failed, args, Discord){
        
        emotes.smug().then(gif => {
           
            const smugEmbed = new Discord.MessageEmbed()
           .setTitle(`${message.author.username} acts smug`)
           .setImage(gif)  
            message.channel.send(smugEmbed)
           
        });         
    }
}
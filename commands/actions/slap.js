const emotes = require('discord-emotes')

module.exports = {
    name: "slap",
    description: "slap a user",
    execute(client, message, success, failed, args, Discord){

        let taggedUser = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        
        emotes.slap().then(gif => {
           

           if(!taggedUser) {
               message.channel.send("You need to ping who you want to slap!")
           }else {
            const slapEmbed = new Discord.MessageEmbed()
           .setTitle(`${message.author.username} slaps ${taggedUser.username}`)
           .setImage(gif)  
            message.channel.send(slapEmbed)
           }
        });         
    }
}
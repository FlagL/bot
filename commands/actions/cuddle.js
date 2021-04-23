const emotes = require('discord-emotes')

module.exports = {
    name: "cuddle",
    description: "cuddle a user",
    execute(client, message, success, failed, args, Discord){

        let taggedUser = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        
        emotes.cuddle().then(gif => {
           

           if(!taggedUser) {
               message.channel.send("You need to ping who you want to cuddles!")
           }else {
            const cuddleEmbed = new Discord.MessageEmbed()
           .setTitle(`${message.author.username} cuddles ${taggedUser.username}`)
           .setImage(gif)  
            message.channel.send(cuddleEmbed)
           }
        });         
    }
}
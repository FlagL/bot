const emotes = require('discord-emotes')

module.exports = {
    name: "kiss",
    description: "Kiss a user",
    execute(client, message, success, failed, args, Discord){

        let taggedUser = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        
        emotes.kiss().then(gif => {
           

           if(!taggedUser) {
               message.channel.send("You need to ping who you want to kiss!")
           }else {
            const kissEmbed = new Discord.MessageEmbed()
           .setTitle(`${message.author.username} kisses ${taggedUser.username}`)
           .setImage(gif)  
            message.channel.send(kissEmbed)
           }
        });         
    }
}
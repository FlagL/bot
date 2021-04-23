const emotes = require('discord-emotes')

module.exports = {
    name: "pat",
    description: "pat a user",
    execute(client, message, success, failed, args, Discord){

        let taggedUser = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        
        emotes.pat().then(gif => {
           

           if(!taggedUser) {
               message.channel.send("You need to ping who you want to pat!")
           }else {
            const patEmbed = new Discord.MessageEmbed()
           .setTitle(`${message.author.username} pats ${taggedUser.username}`)
           .setImage(gif)  
            message.channel.send(patEmbed)
           }
        });         
    }
}
const emotes = require('discord-emotes')

module.exports = {
    name: "tickle",
    description: "tickle a user",
    execute(client, message,success, failed, args, Discord){

        let taggedUser = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        
        emotes.tickle().then(gif => {
           

           if(!taggedUser) {
               message.channel.send("You need to ping who you want to tickle!")
           }else {
            const tickleEmbed = new Discord.MessageEmbed()
           .setTitle(`${message.author.username} cutely tickles ${taggedUser.username}`)
           .setImage(gif)  
            message.channel.send(tickleEmbed)
           }
        });         
    }
}
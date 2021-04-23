const emotes = require('discord-emotes')

module.exports = {
    name: "hug",
    description: "Hug a user",
    execute(client, message, success, failed, args, Discord){

        let taggedUser = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        
        emotes.hug().then(gif => {
           

           if(!taggedUser) {
               message.channel.send("You need to ping who you want to hug!")
           }else {
            const hugEmbed = new Discord.MessageEmbed()
           .setTitle(`${message.author.username} hugs ${taggedUser.username}`)
           .setImage(gif)  
            message.channel.send(hugEmbed)
           }
        });         
    }
}
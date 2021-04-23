const emotes = require('discord-emotes')

module.exports = {
    name: "poke",
    description: "poke a user",
    execute(client, message, success, failed, args, Discord){

        let taggedUser = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        
        emotes.poke().then(gif => {
           

           if(!taggedUser) {
               message.channel.send("You need to ping who you want to kiss!")
           }else {
            const pokeEmbed = new Discord.MessageEmbed()
           .setTitle(`${message.author.username} pokes ${taggedUser.username}`)
           .setImage(gif)  
            message.channel.send(pokeEmbed)
           }
        });         
    }
}
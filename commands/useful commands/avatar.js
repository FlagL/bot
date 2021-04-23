module.exports = {
    name: "avatar",
    aliases: ['av'],
    description: 'Get user avatar',
    execute(client, message, success, failed, args, Discord){

        let taggedUser = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        let userAvatar = message.author.displayAvatarURL({format: "png", dynamic: true});

        if(!taggedUser){
            const userAv = new Discord.MessageEmbed()
            .setTitle(`${message.author.username}'s downloadable avatar`)
            .setURL(userAvatar)
            .setDescription(`${message.author.username}'s avatar`)
            .setImage(userAvatar)
            .setColor("#fAf334")
            .setFooter("=help")

            message.channel.send(userAv)
        }else if(taggedUser){
            const pingAv = new Discord.MessageEmbed()
            .setTitle(`${taggedUser.username}'s downloadable avatar`)
            .setURL(taggedUser.displayAvatarURL({format: "png", dynamic: true}))
            .setDescription(`${taggedUser.username}'s avatar`)
            .setImage(taggedUser.displayAvatarURL({format: "png", dynamic: true}))
            .setColor("#fAf334")
            .setFooter("=help")

            message.channel.send(pingAv)
        }else {
            message.channel.send("Something went wrong!")
        }
    }
}
module.exports = {
    name: 'howhorny',
    aliases: ['horny'],
    cooldown: 5,
    description: "horny scale command",
    execute(client, message, success, failed, args, Discord){
       
        let max = 100
        let min = 1
        let randNo = Math.round(Math.random() * max + min );
        
        let taggedUser = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        let hornyCalc = randNo;

        const hornyEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} is horny af`)
        .setThumbnail("https://cdn.discordapp.com/attachments/803323610680000582/819305104753819696/1f8f3975b69c4903d275093c3aec1fbf.gif")
        .setDescription(`${hornyCalc}%`)
        .setColor("#68136b")
        .setFooter("Horny level detector")
        .setTimestamp()

        const notHornyEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} is kinda horny`)
        .setThumbnail("https://cdn.discordapp.com/attachments/803323610680000582/819305104753819696/1f8f3975b69c4903d275093c3aec1fbf.gif")
        .setColor("#68136b")
        .setDescription(`${hornyCalc}%`)
        .setFooter("Horny level detector")
        .setTimestamp()

        const hornyEmbed69 = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} ayo?`)
        .setThumbnail("https://cdn.discordapp.com/attachments/803323610680000582/819305104753819696/1f8f3975b69c4903d275093c3aec1fbf.gif")
        .setDescription(`${hornyCalc}% :flushed:`)
        .setColor("#68136b")
        .setFooter("Horny level detector")
        .setTimestamp()

        const noHornyEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} feels literally nothing right now`)
        .setThumbnail("https://cdn.discordapp.com/attachments/803323610680000582/819305104753819696/1f8f3975b69c4903d275093c3aec1fbf.gif")
        .setDescription(`${hornyCalc}%`)
        .setColor("#68136b")
        .setFooter("Horny level detector")
        .setTimestamp()

        if(!taggedUser)
        {
            if(70 <= hornyCalc){
                message.channel.send(hornyEmbed)
            }else if (69 == hornyCalc){
                message.channel.send(hornyEmbed69)
            }else if(69 > hornyCalc && 29 < hornyCalc){
                message.channel.send(notHornyEmbed)
            }else {
                message.channel.send(noHornyEmbed)
            }
        }
        else
        {
            const hornyEmbedPing = new Discord.MessageEmbed()
            .setTitle(`${taggedUser.username}is horny af`)
            .setThumbnail("https://cdn.discordapp.com/attachments/803323610680000582/819305104753819696/1f8f3975b69c4903d275093c3aec1fbf.gif")
            .setDescription(`${hornyCalc}%`)
            .setColor("#68136b")
            .setFooter("Horny level detector")
            .setTimestamp()

            const notHornyEmbedPing = new Discord.MessageEmbed()
            .setTitle(`${taggedUser.username} is kinda horny`)
            .setThumbnail("https://cdn.discordapp.com/attachments/803323610680000582/819305104753819696/1f8f3975b69c4903d275093c3aec1fbf.gif")
            .setColor("#68136b")
            .setDescription(`${hornyCalc}%`)
            .setFooter("Horny level detector")
            .setTimestamp()

            const hornyEmbed69Ping = new Discord.MessageEmbed()
            .setTitle(`${taggedUser.username} ayo?`)
            .setThumbnail("https://cdn.discordapp.com/attachments/803323610680000582/819305104753819696/1f8f3975b69c4903d275093c3aec1fbf.gif")
            .setDescription(`${hornyCalc}% :flushed:`)
            .setColor("#68136b")
            .setFooter("Horny level detector")
            .setTimestamp()

            const noHornyEmbedPing = new Discord.MessageEmbed()
            .setTitle(`${taggedUser.username} feels literally nothing right now`)
            .setThumbnail("https://cdn.discordapp.com/attachments/803323610680000582/819305104753819696/1f8f3975b69c4903d275093c3aec1fbf.gif")
            .setDescription(`${hornyCalc}%`)
            .setColor("#68136b")
            .setFooter("Horny level detector")
            .setTimestamp()

            if(70 <= hornyCalc){
                message.channel.send(hornyEmbedPing)
            }else if (69 == hornyCalc){
                message.channel.send(hornyEmbed69Ping)
            }else if(69 > hornyCalc && 29 < hornyCalc){
                message.channel.send(notHornyEmbedPing)
            }else {
                message.channel.send(noHornyEmbedPing)
            }
        }
         

    }
}                                                              
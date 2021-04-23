module.exports = {
    name: 'howhappy',
    aliases: ['happy'],
    description: "happy scale command",
    execute(client, message, success, failed, args, Discord){
       
        let max = 100
        let min = 1
        let randNo = Math.round(Math.random() * max + min );
        let hapCalc = randNo;
        
        let taggedUser = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        
        const happyEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} is happy`)
        .setDescription(`${hapCalc}%`)
        .setColor("#fc83f0")
        .setThumbnail("https://cdn.discordapp.com/attachments/803323610680000582/820246721434877952/FKMACgP.gif")
        .setFooter("Happiness detector")
        .setTimestamp()

        const notHappyEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} isn't too happy right now`)
        .setDescription(`${hapCalc}%`)
        .setColor("#545154")
        .setThumbnail("https://cdn.discordapp.com/attachments/803323610680000582/820247215896920086/original.gif")
        .setFooter("Happiness detector")
        .setTimestamp()

        if(!taggedUser)
        {
            if(50 <= hapCalc){
                message.channel.send(happyEmbed)
            } else if(50 > hapCalc){
                message.channel.send(notHappyEmbed)
            }
        }
        else
        {
            const happyEmbedPing = new Discord.MessageEmbed()
            .setTitle(`${taggedUser.username} is happy`)
            .setDescription(`${hapCalc}%`)
            .setColor("#fc83f0")
            .setThumbnail("https://cdn.discordapp.com/attachments/803323610680000582/820246721434877952/FKMACgP.gif")
            .setFooter("Happiness detector")
            .setTimestamp()
    
            const notHappyEmbedPing = new Discord.MessageEmbed()
            .setTitle(`${taggedUser.username} isn't too happy right now`)
            .setDescription(`${hapCalc}%`)
            .setColor("#545154")
            .setThumbnail("https://cdn.discordapp.com/attachments/803323610680000582/820247215896920086/original.gif")
            .setFooter("Happiness detector")
            .setTimestamp()

            if(50 <= hapCalc){
                message.channel.send(happyEmbedPing)
            }else if(50 > hapCalc){
                message.channel.send(notHappyEmbedPing)
            }
        }
         

    }
}                                                              
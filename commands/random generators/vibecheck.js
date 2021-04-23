module.exports = {
    name: 'vibecheck',
    aliases: ['vibe', 'vcheck'],
    description: "Vibe check",
    execute(client, message, success, failed, args, Discord){
       
        let max = 100
        let min = 1
        let randNo = Math.round(Math.random() * max + min );
        let vibeCalc = randNo;
        
        let taggedUser = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        
        
        const onAWholeVibeEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} you are vibing `)
        .setThumbnail('https://cdn.discordapp.com/attachments/803323610680000582/820059639492247572/819641925920620584.gif')
        .setDescription(`${vibeCalc}%`)
        .setColor('#f5dd2a')
        .setTimestamp()
        .setFooter('Vibe Check')
        
        const notAvibeEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} you didnt pass the vibe check `)
        .setDescription(`${vibeCalc}%`)
        .setThumbnail('https://cdn.discordapp.com/attachments/814850849238679603/817531294594367498/original-28.gif')
        .setColor('#2b778a')
        .setTimestamp()
        .setFooter('Vibe check')

        const KindavibeEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} kinda vibing, kinda not `)
        .setDescription(`${vibeCalc}%`)
        .setThumbnail('https://cdn.discordapp.com/attachments/814850849238679603/817531294594367498/original-28.gif')
        .setColor('#2b778a')
        .setTimestamp()
        .setFooter('Vibe check')
                        
        if(!taggedUser){
            
            if(69 <= vibeCalc ){
                message.channel.send(onAWholeVibeEmbed)
            } else if(50 < vibeCalc && 69 > vibeCalc) {
                message.channel.send(KindavibeEmbed)
            }else {
                message.channel.send(notAvibeEmbed)
            }
            
        } else {
            
            const pingVibeEmbed = new Discord.MessageEmbed()
            .setTitle(`${taggedUser.username} is vibing `)
            .setThumbnail('https://cdn.discordapp.com/attachments/803323610680000582/820059639492247572/819641925920620584.gif')
            .setDescription(`${vibeCalc}%`)
            .setColor('#f5dd2a')
            .setTimestamp()
            .setFooter('Vibe Check')

            const pingNoVibeEmbed = new Discord.MessageEmbed()
            .setTitle(`${taggedUser.username} didn't pass the vibe check`)
            .setDescription(`${vibeCalc}%`)
            .setThumbnail('https://cdn.discordapp.com/attachments/814850849238679603/817531294594367498/original-28.gif')
            .setColor('#2b778a')
            .setTimestamp()
            .setFooter('Vibe check')

            const pingKindavibeEmbed = new Discord.MessageEmbed()
            .setTitle(`${taggedUser.username} kinda vibing, kinda not `)
            .setDescription(`${vibeCalc}%`)
            .setThumbnail('https://cdn.discordapp.com/attachments/814850849238679603/817531294594367498/original-28.gif')
            .setColor('#2b778a')
            .setTimestamp()
            .setFooter('Vibe check')
            
            if(69 <= vibeCalc ){
                message.channel.send(pingVibeEmbed)
            } else if(50 < vibeCalc && 69 > vibeCalc) {
                message.channel.send(pingKindavibeEmbed)
            }else {
                message.channel.send(pingNoVibeEmbed)
            }
            
       
        }
        
            
        
         

    }
}                                                              
module.exports = {
    name: 'membercount',
    aliases: ['mc', 'mcount'],
    description: "Members in a guild",
    execute(client, message, success, failed, args, Discord){
        
        let usersName = message.author.username;
        let userId = message.author.id;
        let guild = message.guild;
        let guildName = message.guild.name;
        let guildMembers = guild.members.cache.filter(member => !member.user.bot).size;
        let guildBots = guild.members.cache.filter(member => member.user.bot).size;
        
        const memberCountEmbed = new Discord.MessageEmbed()
        .setTitle(`↳ ❝ [${guildName}'s member count] ¡! ❞`)
        .setDescription(`
        If 1+1 = 2 then...
        ╭﹕♤ •Total member count: ${guild.memberCount}
        ﹕• Total user count: ${guildMembers}
        ╰﹕♤ • Total bot count: ${guildBots}
        `)
        .setThumbnail('https://cdn.discordapp.com/attachments/814850849238679603/817531294941708308/e9b0b7cf7c68c596b090f14167ba2bd8.gif')
        .setColor("#FFB6C1")
        
        let ref = 1 + 1
        if(ref = 2) {
            message.channel.send(memberCountEmbed)
        }

        

    }
}
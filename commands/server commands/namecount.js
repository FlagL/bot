module.exports = {
    name: 'namecount',
    aliases: ['nm', 'updatename'],
    description: "Members in a guild in name",
    execute(client, message, success, failed, args, Discord){
        
        let usersName = message.author.username;
        let guild = message.guild;
        let userCount = guild.members.cache.filter(member => !member.user.bot).size;
        let ref = 1 + 1
        if(ref = 2) {
            message.member.setNickname(`${usersName} | ${userCount}`)
        }
    }
}
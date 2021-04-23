module.exports = {
    name: 'freenitro',
    aliases: ['fn', 'nitro'],
    description: "Hack free nitro",
    execute(client, message, success, failed, args, Discord){
        
        const nitroEmbed = new Discord.MessageEmbed()
        .setTitle("Totally legit link searcher")
        .setImage("https://cdn.discordapp.com/attachments/803323610680000582/818139296442744832/image0_2.gif")
        
        
        
        
        message.channel.send("Hacking into discord database...")
        .then(msg => {
            setTimeout(function() {
                msg.edit("Finding unused nitro link")
            }, 10000);
        })
        .then(msg => {
            setTimeout(function() {
                message.reply(nitroEmbed)
            }, 5000);
        })
        .then(msg => {
            setTimeout(function() {
                message.reply("unable to find one")
            }, 5000);
        })
        
        
        
            
        
        
        
    }
}
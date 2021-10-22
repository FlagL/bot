module.exports = {
    name: 'kill',
    aliases: ['Kill'],
    description: "Kill a user",
    execute(client, message, success, failed, args, Discord){
        const page2 = new Discord.MessageEmbed()
        .setTitle("Help")
        .setDescription("Settings")
        .addFields([
            {name: "Prefix", value: "To change the bot's prefix you can run the setprefix command. `,setprefix`/ `,sp`/ `,prefix`"},
            {name: "Official Discord Server", value: "Click here for the server!", url: "https://discord.gg/mykEgTVqMB"}
        ])
    }
}
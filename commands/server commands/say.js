module.exports = {
    name: 'say',
    permissions: ["ADMINISTRATOR"],
    description: 'copy what user says',
    execute(client, message, success, failed, args, Discord){
        const messageSent = message.content.slice(4).trim()
        if(message.author.bot) return;
        if(message.content.includes("@everyone")) return message.channel.send("You cant ping everyone!")
        message.channel.send(messageSent)
    }
}
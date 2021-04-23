module.exports = {
    name:'clear',
    aliases: ['purge'],
    permissions: ["MANAGE_GUILD"],
    description:"purge messages",
    async execute(client, message, success, failed, args){
        
           
            if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear!"); 
        if(isNaN(args[0])) return message.reply("Please enter a real number!");

        if(args[0] > 100) return message.reply("You can't send more than 100 messages");
        if (args[0] < 1) return message.reply("You must clear more at least one message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
        
        

    }
}
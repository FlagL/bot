const eyes = require('eyes')

module.exports = {
    name: 'emoji',
    aliases: ['emote'],
    description: "An emote stealer",
    async execute(client, message, args, Discord){
        if(!args[0]) return message.channel.send('Please send an emoji')
        const regex = args[0].replace(/^<a?:\w+:(\d+)>$/, '$1');
      
        const emoji = message.guild.emojis.cache.find((e) => e.name === args[0] || e.id === regex)
        const emoji_img = emoji.url
        const emoji_name = emoji.name


    
       
        try{
        message.guild.emojis.create(emoji_img, emoji_name)
        }
        catch(e){
            return message.channel.send('Something went wrong')
        }
            message.channel.send(`**Successfully created** ${emoji.toString()}`)

        
    }
}
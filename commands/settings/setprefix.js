const GuildConfig = require('../../database/models/GuildConfig');

module.exports = {
  name: 'setprefix',
  aliases: ['sp', 'prefix'],
  permissions: ["ADMINISTRATOR"],
  async execute(client, message, success, failed, args){
    const guildConfig = await GuildConfig.findOne({ guildId: message.guild.id })
    const prefix = guildConfig.get('prefix')
    
    if(!args[0]) return message.channel.send('❌: Write A Prefix!') 
    if(args[0] === prefix) return message.channel.send('❌: This is already your prefix!')
    
    guildConfig.set({ prefix: args[0] })
    await guildConfig.save()
    message.channel.send(`The Server's Prefix Changed To ${args[0]}`)
  }
  
}
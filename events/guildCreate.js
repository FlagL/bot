const GuildConfig = require('../database/models/GuildConfig')

module.exports = {
  name: 'guildCreate',
  async execute(client, discord, guild) {
    
    GuildConfig.create({
      guildId: guild.id
    })
    
    console.log('bot joined in a guild')
  }
}

const GuildConfig = require('../database/models/GuildConfig')
require('dotenv').config()

module.exports = {
  name: 'message',
  async execute (client, Discord, message) {
    const guildConfig = await GuildConfig.findOne({ guildId: message.guild.id })
    const prefix = guildConfig.get('prefix')
    
    if(message.author.bot) return;
      
    if(!message.guild) return;
    
    if(!message.content.startsWith(prefix)) return;
    
    const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g)
    
    const cmd = args.shift()
    const command = client.commands.get(cmd) || client.aliases.get(cmd)
    
    const success = '<:success:828298824271396874>'
    const failed = '<:error:828297827398189116>'
    
  const validPermissions = [
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS",
  ]

  if(command.permissions){
    let invalidPerms = []
    for(const perm of command.permissions){
      if(!validPermissions.includes(perm)){
        return console.log(`${failed} | Invalid Permissions ${perm}`);
      }
      if(!message.member.hasPermission(perm)){
        invalidPerms.push(perm);
      }
    }
    if (invalidPerms.length){
      return message.channel.send(`Missing Permissions: \`${invalidPerms}\``);
    }
  }
    
    if(command) {
      command.execute(client, message, success, failed, args, Discord)
      console.log(`${message.author.tag} Used ${command.name} Command`)
    }
  }
}

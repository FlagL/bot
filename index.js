const Discord = require('discord.js')
const client = new Discord.Client()
require('dotenv').config()
const token = process.env.BOT_TOKEN

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()

require(`./database/Connect`)

new Array("command", "event").forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord)
})

module.exports = client

client.login(token)
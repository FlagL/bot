const { readdirSync } = require('fs')
const path = require('path')

module.exports = (client) => {
  readdirSync(path.resolve(__dirname, '..', 'commands')).forEach(dir => {
    const commandFiles = readdirSync(path.resolve(__dirname, '..', `commands/${dir}`)).filter(file => file.endsWith('.js'))
    
    for(let file of commandFiles) {
      const command = require(`../commands/${dir}/${file}`)
      
      if(!command.name) {
        throw new Error('Please Add A Name To The Command')
      }
      
      if(command.aliases) for(let alias of command.aliases) {
        client.aliases.set(alias, command)
      }
      
      client.commands.set(command.name, command)
    }
  })
}
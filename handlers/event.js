const { readdirSync } = require('fs')
const path = require('path')

module.exports = (client, discord) => {
  const eventFiles = readdirSync(path.resolve(__dirname, '..', 'events')).filter(file => file.endsWith('.js'))
  
  for(let file of eventFiles) {
    let event = require(`../events/${file}`)
    
    if(!event.name) {
      throw new Error('Please Add A Name To The Event!')
    }
    
    client.on(event.name, event.execute.bind(null, client, discord))
  }
}
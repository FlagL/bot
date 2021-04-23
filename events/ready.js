module.exports = {
  name: 'ready',
  execute (client) {
    console.log(`${client.user.tag} Is Online!`)
    client.user.setActivity('=help')
  }
}
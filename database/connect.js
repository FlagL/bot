const mongo = require('mongoose')
require('dotenv').config()
const mongoPath = 'mongodb+srv://Flag1:H3llomyworld@cluster0.bjvda.mongodb.net/test'

async function connect() {
    console.log('Connecting...')
    mongo.connect(mongoPath, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    console.log("Connected To Database...")
  }
  
  module.exports = connect()
const mongoose = require('mongoose')

const g = new mongoose.Schema({
  guildId: {
    type: String,
    required: true
  },
  prefix: {
    type: String,
    required: true,
    default: "="
  }
})

module.exports = mongoose.model("GuildConfig", g)
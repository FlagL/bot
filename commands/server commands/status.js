const os = require('os')

module.exports = {
  name: "status",
  aliases: ["stat"],
  async execute (client, message, success, failed, args, Discord){
    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let usage = os.loadavg()

    const statEmbed = new Discord.MessageEmbed()
      .setTitle(`${client.user.username} Stats`)
      .setColor("ORANGE")
      .setThumbnail(client.user.displayAvatarURL())
      .addField("<:settings:822575836304506880> • __Using__", `\`Discord.js: v12.5.1\``)
      .addField("<:ram:822556197667733524> • __RAM__", `\`${Math.floor(process.memoryUsage().heapUsed / 1024 / 1024)}MB\``)
      .addField("<:cpu:834911643325562990> • __CPU__", `\`${Math.floor(usage[0])}%\``)
      .addField(":arrow_double_up: • __Uptime__", `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`)
      .setFooter('<a:rickroll:836350708105609268>')
    message.channel.send(statEmbed);
  }
};

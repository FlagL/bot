module.exports = {
    name: "onlyfans",
    aliases: ["onlyfan", "of"],
    description: "onlyfans command",
    execute (client, message, success, failed, args, Discord) {
        message.channel.send("http://bit.ly/flagsonlyfan");
    }
}
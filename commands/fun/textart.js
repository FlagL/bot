const figlet = require('figlet');

module.exports = {
    name: "textart",
    description: "making a text art",
    execute(client, message, success, failed, args, Discord) {
       if(!args[0]){
        message.channel.send("You need parameters to run this command!")
       } else {
           figlet.text(args.join(" "), {
            font: "",
        },
        async (err, data) => {
            message.channel.send(`\`\`\`${data}\`\`\``);
        })
       }

        
    }
}
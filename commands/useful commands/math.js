const math = require('mathjs');
const { execute } = require('../games/ttt');

module.exports = {
    name: "math",
    description: "calculate command",
    async execute(client, message, success, failed, args, Discord){

        try{
            message.channel.send(
                new Discord.MessageEmbed()
                .addField('Question', args.join(" "))
                .addField('Solution', math.evaluate(args.join(" ")))
            )
        }catch(err){
            console.log(err)
            message.channel.send("Calculation is invalid!")
        }
    }
}
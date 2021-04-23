module.exports = {
    name: "activity",
    description: "change bot activity",
    execute(client, message, success, failed, args, Discord){
        
        if(message.author.id === "702231170636709978"){
            if (args[0] === "playing"){
                types = 0
            } else if (args[0] === "streaming") {
                types = 1
            } else if (args[0] === "listening") {
                types = 2
            } else if (args[0] === "watching") {
                types = 3
            } else if (args[0] === "competing") {
                types = 5
            } else if (args[0] === "reset") {
            
                client.user.setActivity(`-help`, {type:"LISTENING"}) 
            
                return message.channel.send('Status changed succesfully')
            
            } else {
                return message.channel.send('Invalid activity type.')
            }
            
                args.shift()
                content = args.join(' ')
                client.user.setPresence({
                    activity: {
                        name: content,
                        type: types
                    }
                })
                message.channel.send('Status changed succesfully')
        }else{
            message.channel.send("Hey!! You cant use this")
        }
    }
}     

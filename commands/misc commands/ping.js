module.exports = {
    name:'ping',
    description:"this is a test command",
    execute(client, message, success, failed, args){
        if(args = "ping"){
            message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
        }
    }
}
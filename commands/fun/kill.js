module.exports = {
    name: 'kill',
    aliases: ['Kill'],
    description: "Kill a user",
    execute(client, message, success, failed, args, Discord){
        
        let userN =  message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        const killArray = ["flew too close to the sun and died", "died by forgetting how to breathe", "died attempting to eat Sofa's cooking", "died after calling Zaz flat", "got hit by a car that ran into their house", "died after begging for admin perms", "commited toaster bath", "got sick and tired of the server owners constant bullying and got banned attempting to talk about it", "died"];
        const randKill = killArray[Math.floor(Math.random() * killArray.length)];

        const killArray2 = ["died attempting to hug", "was shot to death for peeking at", "went missing after exposing", "died after eating food made by", "died after receiving a kiss from"];
        const randKill2 = killArray2[Math.floor(Math.random() * killArray2.length)];

        if (!userN){
            message.channel.send("Kill someone else not yourself");
        }  else {
            message.channel.send("**" + userN.username + " " + randKill + "**" || "**" + userN.username + " " + randKill2 + " " + message.author.username + "**")
        }
    }
}
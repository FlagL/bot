module.exports = {
    name: 'rps',
    description: "rock paper scissors",
    execute(client, message, success, failed, args, Discord){
         
        
        let rock = "1";
        let paper = "2";
        let scissors = "3";
        let rpsArray = [rock, paper, scissors]

        let randRps = rpsArray[Math.floor(Math.random() * rpsArray.length)];
        
        let botAnswer = randRps
        
        if( args[0] === 'rock' || args[0] === 'r'){
            if(botAnswer === "1") {
                message.channel.send("I picked rock :rock:")
            .then(msg => {
            setTimeout(function() {
                msg.channel.send("It's a tie!!")
            }, 500);
             })
                
                
            }else if(botAnswer === "2") {
                message.channel.send("I picked paper :page_with_curl:")
                .then(msg => {
                setTimeout(function() {
                    msg.channel.send("YOU LOSE!!")
                }, 500);
                })

            }else if(botAnswer === "3") {
                message.channel.send("I picked scissors")
                .then(msg => {
                setTimeout(function() {
                    msg.channel.send("You WIN!!")
                }, 500);
                })
        }

        }else if(args[0] === 'paper' || args[0] === 'p') {
            if(botAnswer === "1") {
                message.channel.send("I picked rock :rock:")
            .then(msg => {
            setTimeout(function() {
                msg.channel.send("You WIN!!")
            }, 500);
             })
                
                
            }else if(botAnswer === "2") {
                message.channel.send("I picked paper :page_with_curl:")
                .then(msg => {
                setTimeout(function() {
                    msg.channel.send("It's a tie!!")
                }, 500);
                })

            }else if(botAnswer === "3") {
                message.channel.send("I picked scissors")
                .then(msg => {
                setTimeout(function() {
                    msg.channel.send("YOU LOSE!!")
                }, 500);
                })
        }else if(args[0] === 'scissors' || args[0] === 's') {
            if(botAnswer === "1") {
                message.channel.send("I picked rock :rock:")
            .then(msg => {
            setTimeout(function() {
                msg.channel.send("You LOSE!!")
            }, 500);
             })
                
                
            }else if(botAnswer === "2") {
                message.channel.send("I picked paper :page_with_curl:")
                .then(msg => {
                setTimeout(function() {
                    msg.channel.send("YOU WIN!!")
                }, 500);
                })

            }else if(botAnswer === "3") {
                message.channel.send("I picked scissors")
                .then(msg => {
                setTimeout(function() {
                    msg.channel.send("It's a tie!!")
                }, 500);
                })
        }else if (!args[0] ) {
            message.channel.send('Please input a value')
        }else {
            message.channel.send('Please input either "rock", "paper" or "scissors"')
        }
        }
    }
    }
}                                                           
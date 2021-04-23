const TicTacToe = require('discord-tictactoe')

module.exports = {
    name: "ttt",
    description: "Tictactoe",
    async execute(client, message, args, Discord){
        const game = new TicTacToe({ language: 'en' })

        game.handleMessage(message);
    }
}
const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'suggestion',
    aliases:['suggestions', 'suggest', 'topics', 'topic'],
    description: 'make a suggestion',
    execute(client, message, success, failed, args, Discord) {
        const suggest = ["Pineapple on pizza or no?", "Flag for best admin?", "New commands youd be interested in(Ping flag)", "Thoughts on ", "Whats your biggest kitchen fail", " Have you ever sent a text message to the wrong person and what was it?", "What is the most embarrassing thing that happened to you in school?", "What is your signature dance move ", "What is one thing you refuse to share?", "If you could have any superpower(s), what would it be?", "Did you dream about anything today, and if so what did you dream of?", "Whats a holiday that doesn’t exist that you like to create?", "You would rather be a hobbit or an elf for 24 hours?", "If you could have an unlimited storage of one thing, what would it be?", "If you could only eat one food for the rest of your life, what would it be?", "You are about to get into a fight, what song comes on as your soundtrack?", "What mythical creature would improve the world most if it existed?", "If any animals could talk, which one would be the rudest?", "If you could morph two animals to make one super animals, what two animals would it be?", "If you were famous, what would your stage name be?"];
        const randSuggest = suggest[Math.floor(Math.random() * suggest.length)];
        const suggest2 = ["Would you rather shoot spaghetti out of your fingers or sneeze meatballs?", "Would you rather always say everything on your mind or never speak again?", "Would you rather be always be 10 minutes late or always be 20 minutes early?", "Would you rather know the history of every object you touched or be ale to talk to animals?", "Would you rather have all traffic lights you approach be green or never have to stand in line again", "Would you rather spend the rest of your life with a sailboat as your home or an RV as your home?", "Would you rather be able to see 10minutes into your own future or 10 minutes into the future of anyone but yourself?", "Would you rather be the first person to explore a planets or be the inventor of a drug that cures a deadly disease?", "Would you rather be able to control animals (but nor humans) with your mind or control electronics with your mind?", "Would you rather see what was behind every closed door or be able to guess the combination of every safe on the first try?", "Would you rather be an average person in the present or a king/queen of a large country 2500 years ago?", "Would you rather be forced to dance every time you heard music or be forced to sing along to any song you heard?", "Would you rather travel the world for a year on a shoestring budget or stay in only one country for a year but live in luxury?"];
        const randSuggest2 = suggest2[Math.floor(Math.random() * suggest.length)];


        const suggestEmbed = new Discord.MessageEmbed()
        .setTitle('Random topics')
        .setDescription(randSuggest || randSuggest2 )
        .setColor('RED')
        .setFooter("Suggestions Generator")
        .setTimestamp()

        if(args = 'suggestion') {
            message.reply(suggestEmbed)
        }
    }
}
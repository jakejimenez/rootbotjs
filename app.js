var DiscordClient = require('discord.io');
var cred = require("./cred.json");
var fs = require("fs");
 console.log("\n *START* \n");
 var content = fs.readFileSync("./cred.json");
 console.log("Your Credentials : \n"+ content);
 console.log("\n *EXIT* \n");
var bot = new DiscordClient({
    autorun: true,
    email: cred.email,
    password: cred.password,
    //OR
    token: ""
});

// VARIABLES
var adminUsers = '110900955968475136'
// END OF VARIABLEs

// INITIAL FUNCTIONS
bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});
// END OF INITIAL FUNCTIONS

// USER COMMANDS
// Tests responsiveness
bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "!ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
});
// Displays twitch
bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "!twitch") {
        bot.sendMessage({
            to: channelID,
            message: "http://Twitch.tv/redditladderleague or http://Twitch.tv/redditladderleague2"
        });
    }
});
// Displays admin name
bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "!admin") {
        bot.sendMessage({
            to: channelID,
            message: "My admin is x6tent. Please contact him if i'm acting incompetent."
        });
    }
});
// Thank your neighborhood bot.
bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "good bot" && userID !== adminUsers) {
        bot.sendMessage({
            to: channelID,
            message: "Thank you pleb."
        });
    }
});
// Thank Mr. Admin
bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "good bot" && userID == adminUsers) {
        bot.sendMessage({
            to: channelID,
            message: "Thank you almighty ruler."
        });
    }
});
bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "!help") {
        bot.sendMessage({
            to: channelID,
            message: "```!admin | !twitch | !ping | !website | !newwebsite | !donate```"
        });
    }
});
// END OF USER COMMANDS

// ADMIN COMMANDS
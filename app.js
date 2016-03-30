var DiscordClient = require('discord.io');
var cred = require("./cred.json");
var admins = require("./admins.json");
var fs = require("fs");
console.log("\n *START* \n");
var content = fs.readFileSync("./cred.json");
console.log("Your Credentials : \n" + content);
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
var altAdmin = '115268992507183109'
var alttwoAdmin = '146266975658704896'
// END OF VARIABLEs

// INITIAL FUNCTIONS
bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});
bot.on('ready', function() {
    bot.sendMessage({
        to: "110900955968475136",
        message: "I'm ready!"
    });
});
// END OF INITIAL FUNCTIONS

// USER COMMANDS
bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "!ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
    if (message === "!twitch") {
        bot.sendMessage({
            to: channelID,
            message: "http://Twitch.tv/redditladderleague or http://Twitch.tv/redditladderleague2"
        });
    }
    if (message === "!admin") {
        bot.sendMessage({
            to: channelID,
            message: "My admin is x6tent. Please contact him if i'm acting incompetent."
        });
    }
    if (message === "good bot" && userID !== adminUsers) {
        bot.sendMessage({
            to: channelID,
            message: "Thank you pleb."
        });
    }
    if (message === "good bot" && userID == adminUsers) {
        bot.sendMessage({
            to: channelID,
            message: "Thank you almighty ruler."
        });
    }
    if (message === "!help") {
        bot.sendMessage({
            to: channelID,
            message: "```!admin \n!twitch \n!ping \n!website \n!newwebsite \n!donate \n!major```"
        });
    }
    if (message === "!checkin") {
        bot.sendMessage({
            to: "150808896515211264",
            message: "A user has checked in for a match. || User: " + user
        });
    }
    if (message === "!id") {
        bot.sendMessage({
            to: channelID,
            message: userID
        });
    }
    if (message === "bad bot") {
        bot.sendMessage({
            to: channelID,
            message: "Shut up pleb!"
        });
    }
});
// END OF USER COMMANDS

// ADMIN COMMANDS
bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "!disconnect" && userID == adminUsers) {
        bot.disconnect()
    }
});
/*bot.on('message', function(user, userID, channelID, message, rawEvent) {
    var reg = /^\d+$/;
    if (message === "!blacklist " + reg && admins.userID == true) {
        fs.writeFileSync
    }
});*/
// END OF ADMIN COMMANDS

// SPECIAL COMMANDS
bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "!major") {
        bot.sendMessage({
            to: channelID,
            message: "MLG Major Schedule can be seen here: http://www.majorleaguegaming.com/events/84/mlg-cs-go-major-championship--columbus"
        });
    }
});
// END OF SPECIAL COMMANDS
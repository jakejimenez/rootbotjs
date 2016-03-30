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
// END OF VARIABLEs

// INITIAL FUNCTIONS
bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});
bot.on('ready', function() {
    bot.sendMessage({
        to: "146248235499913216",
        message: "I'm ready!"
    });
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
            message: "```!admin | !twitch | !ping | !website | !newwebsite | !donate | | !major```"
        });
    }
});
bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "!checkin") {
        bot.sendMessage({
            to: "146503214047428608",
            message: "A user has checked in for a match. || User: " + user
        });
    }
});
bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "!id") {
        bot.sendMessage({
            to: channelID,
            message: userID
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
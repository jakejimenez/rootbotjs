var DiscordClient = require('discord.io');
var cred = require("./cred.json");
var admins = require("./admins.json");
var fs = require("fs");
var Firebase = require("firebase");
//var myFirebaseRef = new Firebase("YOUR FIREBASE URL");


// Show that the bot is working and setup some initial stuff.
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

// USER SETUP VARIABLES
var adminId = "110900955968475136";
var commandPrefix = "!";
var twitchLink = "YOUR TWITCH LINK";
var websiteLink = "YOUR WEBSITE LINK";
var donateLink = "YOUR DONATE LINK";

// INITIAL FUNCTIONS
bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});
bot.on('ready', function() {
    bot.sendMessage({
        to: adminId,
        message: "I'm ready!"
    });
});
// END OF INITIAL FUNCTIONS

// USER COMMANDS
bot.on('message', function(user, userID, channelID, message, rawEvent) {
    var steamInfoName = "";
    if (message === commandPrefix + "ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
    if (message === commandPrefix + "twitch") {
        bot.sendMessage({
            to: channelID,
            message: twitchLink
        });
    }
    if (message === commandPrefix + "admin") {
        bot.sendMessage({
            to: channelID,
            message: "My admin is " + "<" + "@" + adminId + ">" + ". Please contact him if i'm acting incompetent."
        });
    }
    if (message === commandPrefix + "help") {
        bot.sendMessage({
            to: channelID,
            message: "```admin \ntwitch \nping \nwebsite \ndonate \nid \nchannelid \nsteaminfo {username}```"
        });
    }

    if (message === commandPrefix + "id") {
        bot.sendMessage({
            to: channelID,
            message: userID
        });
    }
    if (message === commandPrefix + "channelid") {
        bot.sendMessage({
            to: channelID,
            message: channelID
        });
    }
    if (message.includes(commandPrefix + 'steaminfo')) {
    	var steamArray = message.split(' ');
    	steamInfoName = steamArray[1];
        bot.sendMessage({
            to: channelID,
            message: "http://steamid.co/player.php?input=" + steamInfoName
        });
    }
});
// END OF USER COMMANDS

// ADMIN COMMANDS
bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === commandPrefix + "disconnect" && userID == adminId) {
        bot.disconnect();
    }
    if (message.includes(commandPrefix + 'setgame')) {
    	var gameStringArray = message.split(' ');
    	bot.setPresence({
    		//idle_since: Date.now(),
    		game: gameStringArray[1]
    	});
    }
});
// END OF ADMIN COMMANDS

// SPECIAL COMMANDS
bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === commandPrefix + "major") {
        bot.sendMessage({
            to: channelID,
            message: "MLG Major Schedule can be seen here: http://www.majorleaguegaming.com/events/84/mlg-cs-go-major-championship--columbus"
        });
    }
});
// END OF SPECIAL COMMANDS
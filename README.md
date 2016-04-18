rootBot for Discord
======
**A Discord bot using Discord.io with Node.JS**

[![forthebadge](http://forthebadge.com/images/badges/gluten-free.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)


### Installation:
1. Clone with repo into a directory of your choice.
2. Cd to that directory and open a command window in the directory (Windows: Shift + RClick) and ```npm install```
3. Create a cred.json file with two value's "email" and "password"
4. Start bot with ```node app.js```

### Setup:
1. Create a cred.json with two values, email with the value of the discord bot email and password with the value of the password for the discord bot.
2. Open up app.js and input your info in the ```USER SETUP VARIABLES``` section of app.js

### User Commands:

| Command       | Desc          | Admin |
| ------------- |:-------------:| -----:|
| ping         | Tests responsiveness of bot.|No|
| twitch       | Returns twitch link.|No|
| admin | Returns admin name.|No|
| help | Returns all the commands.|No|
| id | Returns your Discord ID. |No|
| channelid | Returns channel ID.|No|
| steaminfo {vanity username} | Returns link with info on that user.|No|
| website | Returns link to website provided in setup.|No|
| donate | Returns donate link provided in setup.|No|

### Admin Commands:

| Command       | Desc          | Admin |
| ------------- |:-------------:| -----:|
|setgame| Sets the game name or program for Discord. |Yes|






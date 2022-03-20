const { Client } = new require("discord.js");
const client = new Client({intents: 32767});
require('dotenv').config();

function GetTime(){     // Function to get the day/month/year --- hour:minute:second.millisecond | Unix time
    var Time = new Date();
    return Time.getDate() + "/" + (Time.getMonth() + 1) + "/" + Time.getFullYear() + " --- " + Time.getHours() + ":" + Time.getMinutes() + ":" + Time.getSeconds() + "." + Time.getMilliseconds() + " | " + Time.getTime();
};

require("./Handlers/Events")(client);



client.login(process.env.TOKEN);
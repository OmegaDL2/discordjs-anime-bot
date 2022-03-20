const { Client } = require("discord.js");
var tools = require('../../index');

module.exports = {
    name: "ready",
    once: true,
    /*
    * @param {Client} client
    */
    execute(client) {
        console.log("The client is now ready!" + tools.GetTime())
        client.user.setActivity("Hello!", {type: "WATCHING"})
    }
}

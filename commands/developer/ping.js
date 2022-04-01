const { CommandInteraction } = require("discord.js");
var tools = require('../../index.js');

module.exports = {
    name: "ping",
    description: "ping",
    Permissions: "ADMINISTRATOR",
    type: "developer",
    options: "",
    
    /**
     * 
     * @Param {CommandInteraction} interaction 
     * **/
    execute(interaction) {
        interaction.reply({content:"pong"})
    }
}
const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
var tools = require('../../index.js');

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        if(interaction.isCommand()) {
            const command = client.commands.get(interaction.command.name);
            if(!command) return interaction.reply({embeds: [
                new MessageEmbed()
                .setColor("Red")
                .setDescription("⛔ An error occurred while trying to execute the command.")
            ]}) && client.commands.delete(interaction.commandName);

            command.execute(interaction, client);
        }
    }
}
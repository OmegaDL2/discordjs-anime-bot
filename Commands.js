const { Perms } = require("../Validation/Permissions.js");
const { Client } = require("discord.js");
const { promisify } = require("util");
const { glob } = require("glob");
const PG = promisify(glob);
const Ascii = require("ascii-table");
var tools = require('./index');
const { resourceUsage } = require("process");

/**
 * @param {Client} client 
 */
module.exports = async (client) => {
    const Table = new Ascii("Command Loaded");
    
    CommandsArray = [];

    (await PG(`${process.cwd()}/Commands/*/*.js`)).map(async (file) => {
        const command = require(file);

        if(!command.name){
            return Table.addRow(file.split("/")[7], "♦️ FAILED", "Missing a name.")
        }

        if(!command.description){
            return Table.addRow(command.name, "♦️ FAILED", "Missing a description.")
        }

        if(command.permissions){
            if(Perms.includes(command.permissions)){
                command.defaultPermissions = false;
            }else{return Table.addRow(command.name, "♦️ FAILED", "Permission is invalid")};    
        }

        client.commands.set(command.name, command);
        commandsArray.push(command);

        await Table.addRow(command.name, "☑️ SUCCESSFUL");

    });
    console.log(Table.toString());
    console.log(tools.GetTime());


    //      permissions check  //

    client.on("ready", async () => {
        const MainGuild = await client.guilds.cache.get("635771777636761601");

        MainGuild.commands.set(CommandsArray).then(async (command) => {
            const Roles = (commandName) => {
                const cmdPerms = CommandsArray.find((c) => c.name === commandName).permission;
                if(!cmdPerms) return null; 

                return MainGuild.roles.cache.filter((r) => r.permissions.has(cmdPerms));
            };

            const fullPermissions = command.reduce((accumulator, r) => {
                const roles = Roles(r.name);
                if (!roles) return accumulator;

                const permissions = roles.reduce((a, r) => {
                    return [...a, {id: r.id, type:"ROLE", permission:true}]
                }, []);

                // !https://youtu.be/rqRb8YJ4T5Q?t=589 
            });
        });
    });
};
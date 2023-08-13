const fs = require('fs');
require('dotenv').config();
const { DISCORD_BOT_TOKEN } = process.env;
const { Client, Collection, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: GatewayIntentBits.Guilds });

// Collections
client.commands = new Collection();
client.buttons = new Collection();
client.menus = new Collection();
client.modals = new Collection();

client.login(DISCORD_BOT_TOKEN);

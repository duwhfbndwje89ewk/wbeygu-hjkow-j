const Discord = require("discord.js")
const client = new Discord.Client()
const ayarlar = require("./ayarlar.json");

client.login(ayarlar.token);

client.on("ready", async () => {
client.channels.get("906984707382734932").join()
})

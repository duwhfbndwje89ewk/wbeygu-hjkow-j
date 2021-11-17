const Discord = require("discord.js")
const client = new Discord.Client()

client.login(process.env.token);

client.on("ready", async () => {
client.channels.get("906984707382734932").join()
})

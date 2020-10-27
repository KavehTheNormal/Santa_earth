const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setAuthor("Bot made by Kaveh.exe")
      .addField("🤖 Generator 🤖",".gen [account]")
      .addField("🎵 Music 🎵",".join\n.leave\n.loop\n.now \n.pause\n.play \n.queue \n.remove \n.resume \n.shuffle\n.skip \n.stop \n.summon \n.volume")
      .addField("🎁 Giveaway 🎁",".start [channel-name] [Time] [winners] [Prize]\n.reroll [prize name]\n.end [prize name]")
      .addField("😁 Fun 😁", "ping, invite", true)
      .addField("ℹ Information ℹ", "stats", true)
      .setTimestamp()
      .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send("**You've Got a message 💌, Check DMs**");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}

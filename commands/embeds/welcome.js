const discord = require("discord.js");

module.exports = {
    name: "welcome",
    aliases: [''],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
            const welcome = new discord.MessageEmbed()
            .setColor('#31429a')
            .setFooter(`Called By: ${message.author.tag}`)
            .setTimestamp()
            .setTitle("Welcome!")
            .setDescription(`We are the Robotics Society, a society where you can gain skills in building actual robot, or get help with your assignments or exams, and we know that people like us don’t do much but we also run social nights where we go out to do stuff.`)
            .addField('Exec Members', `President - <@720360699053998242>.\r\nVice President - <@219827174180388864>.\r\nTreasurer - <@619168812083838979>.\r\nSecretary - <@660971490111651840>\r\nMedia Officer - <@626884131812540416>.\r\n Health and Safety Officer - <@311175662817902594>.\r\Project Manager - <@256765136365289482>.\r\n\r\n\r\n`)
            .addField('Rules', ' https://github.com/UniOfHullRoboticsSociety/conduct')
            .addField('Our Links', ` https://www.linktr.ee/HU_RS`)
            .addField('Roles','Please message <@219827174180388864> to recieve the <@&744923016751743038> role.\r\nSelect your year below.')

            const years = new discord.MessageActionRow()
			.addComponents(
                new discord.MessageButton()
                .setCustomId('Foundation')
                .setLabel('Foundation')
                .setStyle('PRIMARY')
            )
            .addComponents(
                new discord.MessageButton()
                .setCustomId('Freshers')
                .setLabel('Freshers')
                .setStyle('PRIMARY')
            )
            .addComponents(
                new discord.MessageButton()
                .setCustomId('SecondYear')
                .setLabel('Second Year')
                .setStyle('PRIMARY')
            )
            .addComponents(
                new discord.MessageButton()
                .setCustomId('Bachelors')
                .setLabel('Bachelors')
                .setStyle('PRIMARY')
            )
            .addComponents(
                new discord.MessageButton()
                .setCustomId('Masters')
                .setLabel('Masters')
                .setStyle('PRIMARY')
            )

            const yearsCont = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                .setCustomId('Graduate')
                .setLabel('Graduate')
                .setStyle('PRIMARY')
            )

        message.channel.send({ embeds: [welcome], components: [years, yearsCont] })


    },
};

module.exports = {
	name: 'serverInfo',
	description: 'serverInfo',
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\n Server Invite: https://discord.gg/8SFEu7B`);
	},
};
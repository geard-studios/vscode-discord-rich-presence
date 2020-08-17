// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const client = require('discord-rich-presence')('744727185037983847');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('VSCode Discord Rich Presence is active.');
	const startTime = Date.now();
	client.updatePresence({
		startTimestamp: startTime,
		largeImageKey: 'vscode-logo',
		instance: true,
	});

	let enableRP = vscode.commands.registerCommand(
		'vscode-discord-rich-presence.enable',
		function () {
			client.updatePresence({
				startTimestamp: startTime,
				largeImageKey: 'vscode-logo',
				instance: true,
			});
			console.log('RPC Manually Enabled');
			vscode.window.showInformationMessage('Rich Presence Enabled');
		}
	);
	let disableRP = vscode.commands.registerCommand(
		'vscode-discord-rich-presence.disable',
		function () {
			client.updatePresence();
			console.log('RPC Manually Disabled');
			vscode.window.showInformationMessage('Rich Presence Disabled');
		}
	);

	context.subscriptions.push(enableRP);
	context.subscriptions.push(disableRP);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
	client.updatePresence();
	console.log('VSCode Discord Rich Presence disabled.');
	vscode.window.showInformationMessage('RPC Deactivated');
}

module.exports = {
	activate,
	deactivate,
};

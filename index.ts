#! /usr/bin/env node
const express = require('express');
const os = require('os');

function main() {
	let portIndex = process.argv.indexOf('--port');
	let port = 9000;
	if (portIndex !== -1) {
		let portString = process.argv[portIndex + 1];
		if (portString) {
			let portInt = parseInt(portString);
			if (!isNaN(port)) {
				port = portInt;
			}
		}
	}
	let interfaces = os.networkInterfaces();
	let addresses: string[] = [];
	for (let interfaceName in interfaces) {
		let networkInterface = interfaces[interfaceName];
		for (let address of networkInterface) {
			if (address.family === 'IPv4') {
				addresses.push(address.address);
			}
		}
	}
	let app = express();
	app.listen(port, () => {
		console.log(`Listening for logs on: \n${addresses.map((val) => `http://${val}:${port}`).join("\n")}`);
	});
	app.post("/", (req: any, res: any) => {
		req.on('data', (data: any) => {
			console.log(data.toString());
		});
		res.send();
	});
}
main()
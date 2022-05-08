#! /usr/bin/env node
var express = require('express');
var os = require('os');
function main() {
    var portIndex = process.argv.indexOf('--port');
    var port = 9000;
    if (portIndex !== -1) {
        var portString = process.argv[portIndex + 1];
        if (portString) {
            var portInt = parseInt(portString);
            if (!isNaN(port)) {
                port = portInt;
            }
        }
    }
    var interfaces = os.networkInterfaces();
    var addresses = [];
    for (var interfaceName in interfaces) {
        var networkInterface = interfaces[interfaceName];
        for (var _i = 0, networkInterface_1 = networkInterface; _i < networkInterface_1.length; _i++) {
            var address = networkInterface_1[_i];
            if (address.family === 'IPv4') {
                addresses.push(address.address);
            }
        }
    }
    var app = express();
    app.listen(port, function () {
        console.log("Listening for logs on: \n".concat(addresses.map(function (val) { return "http://".concat(val, ":").concat(port); }).join("\n")));
    });
    app.post("/", function (req, res) {
        req.on('data', function (data) {
            console.log(data.toString());
        });
        res.send();
    });
}
main();

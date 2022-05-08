# aidoku-logcat
Log streaming for the Aidoku application.  
<strong>NOTE: THIS TOOL (CURRENTLY) ONLY WORKS WITH THE [EXPERIMENTAL IPA ON DISCORD](https://discord.com/channels/927984899472883723/950039656857223269/972742734458802267).</strong>

Installation:
```
npm install -g aidoku-logcat
```
Usage:
```
aidoku-logcat [options]
  options:
    --port <port>        The port to host the source list on, default 9000
```
The CLI will output a list of IPs (usually 2) that your list is being hosted on. These are simply the internal IPV4 addresses of your machine. Make sure you are not using a VPN and that your device is connected to the same Wi-Fi network.

Put the IP into the `Log Server` box in the Aidoku settings. It will be immediately ready to use. Type the IP exactly how you see it in the terminal window. The IP you want to use will normally be the second one on the list.

Created by JimIsWayTooEpic#0001 on Discord.

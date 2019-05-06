const WebSocket = require('ws')
const webSocketServer = new WebSocket.Server({ port: 3001 });
<<<<<<< HEAD
const messages = [];

=======

const messages = [];
  
>>>>>>> corrections
webSocketServer.on('connection', webSocket => {
    if (messages.length) webSocket.send(JSON.stringify(messages));
    webSocket.onmessage = messageEvent => {
        const message = messageEvent.data;
        messages.push(message);
        webSocketServer.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(messages));
            }
        });
    };
    webSocket.send(JSON.stringify(messages));
});

module.exports = webSocketServer;
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', (ws) => {
  console.log('Новое соединение установлено.');
  ws.on('message', (message) => {
    console.log(`Получено сообщение: ${message}`);
    ws.send(`Эхо: ${message}`);
  });
  ws.send('Добро пожаловать на websocket сервер');
});
console.log('WebSocket сервер запущен на locakhost:8080');

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('ユーザーが接続しました');

  socket.on('send_message', (data) => {
    io.emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('ユーザーが切断しました');
  });
});

server.listen(3001, () => {
  console.log('サーバーがポート3001で起動しました');
});

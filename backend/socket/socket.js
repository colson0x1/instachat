import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
  },
});

// We get callback which is socket and this is going to be the user that is
// connected and this socket has id & different properties
io.on('connection', (socket) => {
  console.log('A user connected', socket.id);

  // socket.on() listens to the events (can be used on both client and server side)
  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id);
  });
});

export { app, io, server };

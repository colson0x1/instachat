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

// gives user socket id when passed this receiver id
export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

// { userId: socketId }
const userSocketMap = {};

// We get callback which is socket and this is going to be the user that is
// connected
// This socket has id & different properties
io.on('connection', (socket) => {
  console.log('A user connected', socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != 'undefined') userSocketMap[userId] = socket.id;

  // io.emit() send events to all the connected clients
  // Since userSocketMap is updated, So send an event to all connected clients
  // whenever user connects to socket, it will immediately send this: who is oneline
  // and who is offline and we can get this with this event name on the client
  io.emit('getOnlineUsers', Object.keys(userSocketMap));

  // socket.on() listens to the events (can be used on both client and server side)
  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id);
    // once users disconnects, delete the userId from the socketMap
    delete userSocketMap[userId];
    // since socketMap is updated, call io.emit() again to send event to all clients
    io.emit('getOnlineUsers', Object.keys(userSocketMap));
  });
});

export { app, io, server };

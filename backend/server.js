import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectToMongoDB from './db/mongoDB.config.js';
import { app, server } from './socket/socket.js';

dotenv.config();
const PORT = process.env.PORT || 4000;

const __dirname = path.resolve();

// Parse incoming requests with JSON payloads (from req.body)
app.use(express.json());
// Parse incoming cookies from req.cookies
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
  res.send(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});

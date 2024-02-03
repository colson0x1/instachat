import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectToMongoDB from './db/mongoDB.config.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;

// Parse incoming requests with JSON payloads (from req.body)
app.use(express.json());
// Parse incoming cookies from req.cookies
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

/*
app.get('/', (req, res) => {
  res.send('<h1 style="color: #1DB954">instaChat</h1>');
});
*/

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});

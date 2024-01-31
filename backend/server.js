import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/mongoDB.config.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;

// Parse incoming requests with JSON payloads (from req.body)
app.use(express.json());

app.use('/api/auth', authRoutes);

/*
app.get('/', (req, res) => {
  res.send('<h1 style="color: #1DB954">instaChat</h1>');
});
*/

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});

import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('<h1 style="color: #1DB954">instaChat</h1>');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

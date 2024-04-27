// src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import playerRoutes from './routes/playerRoutes';
import db from './db';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/players', playerRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

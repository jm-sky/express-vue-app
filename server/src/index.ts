import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import routes from './routes/index';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../client/dist')))
app.use(express.static(path.join(__dirname, '../public')))

app.use(`/api`, routes);

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`- open: http://localhost:${PORT}`);
});

export default app;

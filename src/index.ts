import 'express-async-errors'
import express, { Express } from 'express';
import cors from 'cors'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import requireDir from 'require-dir'
import { errorMiddleware } from './middlewares/error';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGO_URL || '')

requireDir('./models')
app.use('/', require('./routes/routes'))

app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
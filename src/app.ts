import express from 'express';
import userController from './controllers/userController';

const app = express();

app.use(express.json());
// vamo q vamo
app.post('/users', userController.createUser);

export default app;

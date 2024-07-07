import express from 'express';
import {user} from './models/user';
import { InternalResponse } from './types/InternalResponse';

const app = express();
const port = 3000;


app.get('/', async (req, res) => {
    try {
        const response: InternalResponse = await user.register('username', 'password');
        res.send(response);
    } catch (error) {
        res.send(error);
    }
});

app.post('/register', (req, res) => {
    const token = user.register('username', 'password');
    res.send({ message: 'Registering user...' });
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
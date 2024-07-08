import express from 'express';
import {user} from './models/user';
import { InternalResponse } from './types/InternalResponse';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', async (req, res) => {
    res.send({ success: true, message: `You've reached the auth service` });
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.send({ success: false, message: 'No username or passwordsssss' });
        return;
    };

    try {
        const response: InternalResponse = await user.register(username, password);
        res.send(response);
    } catch (error) {
        res.send(error);
    }
})

app.use((req, res, next) => {
    res.status(404).send({ success: false, message: 'No route or method found'});
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
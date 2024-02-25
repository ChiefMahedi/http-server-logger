import express from 'express';
import Logger from './Logger/Logger';

const app = express();
const logger = new Logger('access.log');

app.get('/test',(req, res) => {
    const ipAddress = req.ip;
    logger.log(`${req.method} ${req.url}`, ipAddress);
    res.send('Logger running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


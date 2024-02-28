import express from 'express';
import Logger from './Logger/Logger';
import LogObject from './Logger/LogObject';
const app = express();
const logger = new Logger('access.log');
const logObject = new LogObject();
app.get('/test',(req, res) => {
    const ipAddress = req.ip;
    logObject.ipAddress = ipAddress;
    logObject.message = `${req.method} ${req.url}`;
    logger.log(logObject);
    res.send('Logger running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


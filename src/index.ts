import express from 'express';
import Logger, { LogLevel } from './Logger/Logger'; // Assuming Logger class and LogLevel enum are exported from './Logger'
import LogObject from './Logger/LogObject';

const app = express();
const logger = new Logger({ logLevel: LogLevel.INFO, logFilePath: 'access.log' }); // Create Logger instance with log level and file path

app.get('/test', (req, res) => {
    const ipAddress = req.ip;
    const logObject = new LogObject();
    logObject.ipAddress = ipAddress;
    logObject.message = `${req.method} ${req.url}`;
    logger.debug(`${req.method} ${req.url} - from ${ipAddress}`);
    logger.info(`${req.method} ${req.url} - from ${ipAddress}`);
    res.send('Logger running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

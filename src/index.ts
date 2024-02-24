import * as http from 'http';
import Logger from './Logger/Logger';

const logger = new Logger('access.log');

const server = http.createServer((req, res) => {
    logger.log(`${req.method} ${req.url}`);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
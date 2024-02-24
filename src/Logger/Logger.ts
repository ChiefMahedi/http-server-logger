import * as fs from 'fs';

export default class Logger {
    private logStream: fs.WriteStream;

    constructor(logFilePath: string) {
        this.logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
    }
    log(message: string): void {
        const logEntry = `${new Date().toISOString()} - ${message}\n`;
        this.logStream.write(logEntry);
    }
}
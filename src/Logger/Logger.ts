import * as fs from 'fs';
import LogObject from './LogObject';
export default class Logger {
    private logStream: fs.WriteStream;

    constructor(logFilePath: string) {
        this.logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
    }
    log(logObject: LogObject): void {
        const logEntry = `${new Date().toISOString()} - ${logObject.message} - from ${logObject.ipAddress}\n`;
        this.logStream.write(logEntry);
    }
}
import * as fs from 'fs';

export enum LogLevel {
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
}
interface LogOptions {
    logLevel: LogLevel;
    logFilePath: string;
}

export default class Logger {
    private logStream: fs.WriteStream;
    private logLevel: LogLevel;

    constructor(options: LogOptions) {
        this.logStream = fs.createWriteStream(options.logFilePath, { flags: 'a' });
        this.logLevel = options.logLevel;
    }

    private log(message: string, level: LogLevel): void {
            const logEntry = `${new Date().toISOString()} [${level}] - ${message}\n`;
            this.logStream.write(logEntry);
    }
    debug(message: string): void {
        this.log(message, LogLevel.DEBUG);
    }

    info(message: string): void {
        this.log(message, LogLevel.INFO);
    }

    warn(message: string): void {
        this.log(message, LogLevel.WARN);
    }

    error(message: string): void {
        this.log(message, LogLevel.ERROR);
    }
    
    close(): void {
        this.logStream.end();
    }
}
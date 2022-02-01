import winston from 'winston';

export interface Logger {
    info: (msg: string) => void;
    debug: (msg: string) => void;
    error: (msg: string) => void;
    warn: (msg: string) => void;
    verbose: (msg: string) => void;
    log: (level: string, msg: string) => void;
}

export function jsonFormat() {
    return winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.errors({ stack: true }),
        winston.format.json()
    )
}

export function consoleFormat() {
    return winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.errors({ stack: true }),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    )
}

export function formatPicker(format) {
    if (format === 'json') {
        return jsonFormat()
    } else {
        return consoleFormat()
    }
}


export function createLogger(level = 'info', format = 'default'): Logger {
    return winston.createLogger({
        level: level,
        format: formatPicker(format),
        transports: [
            new winston.transports.Console()
        ]
    });
}

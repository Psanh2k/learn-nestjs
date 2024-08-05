import * as winston from 'winston';

export const createLogger = (controllerName: string) => {
  return winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.label({ label: controllerName }),
      winston.format.timestamp(),
      winston.format.printf(({ timestamp, level, message, label }) => {
        return `${timestamp} [${label}] ${level}: ${message}`;
      }),
    ),
    transports: [
      new winston.transports.File({ filename: `logs/${controllerName}.log` }),
    ],
  });
};

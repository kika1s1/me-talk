import fs from 'fs';

export function logMessage(message) {
  const logEntry = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFileSync('logs.txt', logEntry);
  // console.log(message);
}

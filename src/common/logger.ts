import winston from 'winston'

const { combine, timestamp, json } = winston.format

// add transports accordingly
// Winston supports (console, file, http, stream)
const logger = winston.createLogger({
  level: 'http',
  format: combine(timestamp(), json()),
  transports: [
    // prod transports
  ],
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  )
}

export { logger as default }

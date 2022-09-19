const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))

app.use('/api', routes)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})

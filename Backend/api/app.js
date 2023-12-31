import express from 'express'
import cors from 'cors'
import routes from '../router/index.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})
app.use((req, _res, next) => {
  req.setTimeout(10000)
  next()
})
app.use('/api', routes)

export default app

import app from './api/app.js'
import {config} from 'dotenv'
config()

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server on PORT ${port}`)
})

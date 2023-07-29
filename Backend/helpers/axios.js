import axios from 'axios'
import {config} from 'dotenv'
config()

const apiurl = process.env.APIURL
const apikey = process.env.APIKEY

const instance = axios.create({
    baseURL: `${apiurl}`,
    headers: {
      'x-messari-api-key': `${apikey}`
    }
  });

export default instance
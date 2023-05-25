import App from './App'

const app = new App()

require('dotenv').config()

const port : number = parseInt(process.env.SERVER_PORT)

app.start(port || 33333)
const express = require('express')

const cors = require('cors')
const proxy = require('express-http-proxy')

const app = express()

app.use(cors())
app.use(express.json())



app.use('/shopping',proxy('http://localhost:3003'))
app.use('/customer',proxy('http://localhost:3001'))
app.use('/product',proxy('http://localhost:3002'))  // product

app.listen(3000,()=>{
    console.log('Gateway is running on port 3000')
}  )  // This is the port where the server will be running 


const express = require('express')
const app = express()

app.use('/',(req,res,next)=>{
    return res.status(200).json({
        message: 'Product API'
    })
})

app.listen(3002,()=>{
    console.log('Product API is running on port 3001')
}) // This is the port where the server will be running
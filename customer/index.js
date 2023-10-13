const express = require('express')

const app = express()

app.use('/',(req,res,next)=>{
    return res.status(200).json({
        message: 'Customer API'
    })
})

app.listen(3001,()=>{
    console.log('Customer API is running on port 3000')
}) // This is the port where the server will be running    
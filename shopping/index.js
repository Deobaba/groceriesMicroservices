const express = require('express')

const app = express()

app.use('/',(req,res,next)=>{
    return res.status(200).json({
        message: 'Shopping API'
    })
})

app.listen(3003,()=>{   
    console.log('Shopping API is running on port 3000')
})  // This is the port where the server will be running
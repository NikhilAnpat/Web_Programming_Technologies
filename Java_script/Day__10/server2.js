import express from 'express'
let app = express()

import planetsrouter from './planetsRouter.js'
app.use("/planets",planetsrouter)

import guestrouter from "./guestRouter.js"
app.use("/planets",guestrouter)

app.listen(4001,()=>{
    console.log("the server runs on port number 2000")
})
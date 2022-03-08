const { mongoConnection } = require('./connect/mongo')
const {router}=require('./router')
//mogo connection
async function start() {
    await mongoConnection();
}
start();
//server connection
const express=require('express')
const app=express()
app.listen(5000,()=> console.log("-------server connected-------"))
app.use(express.json())
app.use(router)


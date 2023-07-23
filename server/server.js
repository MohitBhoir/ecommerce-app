const express=require('express')
const app=express()
const errorHandler=require('./middleware/error')
const dotenv=require('dotenv').config()
const connectDB=require('./config/connect')
const cors=require('cors')


connectDB()

const port=5000

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(cors({
    origin: "http://localhost:3000"
}))


app.use('/api/v1',require('./routes/products'))
app.use("/api/users",require("./routes/user"))
app.use('/api/v1/reviews',require('./routes/review'))
app.use('/api/v1/stripe',require('./routes/stripe'))


app.use(errorHandler)

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})
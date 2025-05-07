import express from 'express'
//import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(cors());

const PORT =  process.env.PORT

app.get('/', (req, res) => {
    res.send("API Running")
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
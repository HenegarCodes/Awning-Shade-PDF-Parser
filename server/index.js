import express from 'express'
//import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from "dotenv"
import Router from '.routes/price.js'
dotenv.config()

const app = express()
app.use(cors());
app.use('/', Router)
const PORT =  process.env.PORT


//GET request to the homepage
app.get('/', (req, res) => {
    res.send("API Running")
})

// GET pricing page route
Router.get('/price',  (req, res)=>{
    res.send("Pricing page")
});

//UPDATE PUT new or overwerite existing PDF
Router.put("/uploadpdf",  (req, res) => {
    //update prciing info for current company that matches or is selected.
    res.send("Upload new PDF page")
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
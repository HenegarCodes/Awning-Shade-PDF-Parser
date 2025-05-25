import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from "dotenv"
import Router from './routes/price.js'

dotenv.config()

const app = express()

// CORS middleware should be applied BEFORE routes
app.use(cors({
  origin: 'http://localhost:5173',  // React dev server origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}))

// If you expect JSON or urlencoded data, add these:
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Use your routes under /api (for example)
app.use('/api', Router)

// A simple root route
app.get('/', (req, res) => {
  res.send("API Running")
})

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

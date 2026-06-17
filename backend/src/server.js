import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// Middleware
app.use(helmet())
app.use(compression())
app.use(morgan('combined'))
app.use(cors({
  origin: '*',
  credentials: true
}))
app.use(express.json())

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'NVL Backend is running',
    timestamp: new Date().toISOString() 
  })
})

// Welcome endpoint
app.get('/api', (req, res) => {
  res.json({ 
    message: 'Welcome to NVL Education API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      auth: '/api/auth',
      courses: '/api/courses',
      assignments: '/api/assignments'
    }
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    message: 'Endpoint not found',
    path: req.path
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`)
  console.log(`🌐 API available at http://localhost:${PORT}/api`)
  console.log(`💚 Health check at http://localhost:${PORT}/api/health`)
})

export default app
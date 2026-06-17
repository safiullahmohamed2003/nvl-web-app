import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Box, AppBar, Toolbar, Typography, Button } from '@mui/material'
import './App.css'

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            NVL Education
          </Typography>
          <Button color="inherit">Dashboard</Button>
          <Button color="inherit">Courses</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="lg">
        <Box sx={{ py: 8 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to NVL Education Platform
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Your complete learning management system for educational institutes.
          </Typography>
          
          <Box sx={{ mt: 4, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 2 }}>
            <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 1 }}>
              <Typography variant="h6">📚 Courses</Typography>
              <Typography variant="body2" color="text.secondary">
                Access all available courses and enroll
              </Typography>
            </Box>
            <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 1 }}>
              <Typography variant="h6">📝 Assignments</Typography>
              <Typography variant="body2" color="text.secondary">
                Submit and track your assignments
              </Typography>
            </Box>
            <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 1 }}>
              <Typography variant="h6">📊 Grades</Typography>
              <Typography variant="body2" color="text.secondary">
                View your academic performance
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Router>
  )
}

export default App
// make and express server
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const cors = require('cors')
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3001',
    methods: ['GET,POST,PUT,DELETE']
  }
})
app.use(cors())
const PORT = process.env.PORT || 3000

io.on('connection', (socket) => {
  socket.emmit('me', socket.id)
  socket.on('disconnet', () => {
    socket.broadcast.emmit('callended')
  })
  socket.on('calluser', ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emmit('calluser', { signal: signalData, from, name })
  })
  socket.on('answercall', (data) => {
    io.to(data.to).emmit('callaccepted', data.signal)
  })
})
app.get('/health', (req, res) => {
  res.send('ok')
})
app.get('/', (req, res) => {
  res.send('server ready')
})
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} `)
})

// make and express server
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const cors = require('cors')
const io = require('socket.io')(server, {
  cors: {
    origin: process.env.NODE_ENV === 'production' ? 'https://rtc-videochat-client.herokuapp.com' : 'http://localhost:3001',
    methods: ['GET,POST,PUT,DELETE']
  }
})
app.use(cors())
const PORT = process.env.PORT || 3000

io.on('connection', (socket) => {
  socket.emmit('me', socket.id)
  socket.on('disconnet', () => {
    socket.broadcast.emmit('callEnded')
  })
  socket.on('callUser', ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emmit('callUser', { signal: signalData, from, name })
  })
  socket.on('answerCall', (data) => {
    io.to(data.to).emmit('callAccepted', data.signal)
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

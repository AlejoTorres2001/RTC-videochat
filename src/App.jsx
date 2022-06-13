import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io.connect(
  import.meta.env.MODE === 'development'
    ? 'http://localhost:3000'
    : 'https://rtc-videochat-backend.herokuapp.com'
)
function App() {
  const [stream, setStream] = useState('')
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream)
      })
  }, [])
  return (
    <div className="App">
      <h1 className="bg-red-400">Hello world! !</h1>
    </div>
  )
}

export default App

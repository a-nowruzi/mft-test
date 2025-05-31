import React, { useState, useRef } from 'react'
import './App.css'

function App() {
  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Start timer
  const handlePlay = () => {
    if (!isRunning) {
      setIsRunning(true)
      intervalRef.current = window.setInterval(() => {
        setTimer((prev) => prev + 1)
      }, 1000)
    }
  }

  // Pause timer
  const handlePause = () => {
    setIsRunning(false)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  // Reset timer
  const handleReset = () => {
    setTimer(0)
    setIsRunning(false)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current as number)
      }
    }
  }, [])

  return (
    <>
      <div className="card">
        <h2>Timer: {timer} seconds</h2>
        <button onClick={handlePlay} disabled={isRunning} aria-label="Play timer">Play</button>
        <button onClick={handlePause} disabled={!isRunning} aria-label="Pause timer">Pause</button>
        <button onClick={handleReset} aria-label="Reset timer">Reset</button>
      </div>
      <p className="read-the-docs">
        MFT Hiring Test
      </p>
    </>
  )
}

export default App

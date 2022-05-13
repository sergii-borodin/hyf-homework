import React, { useEffect, useState } from 'react'

export const Timer = () => {
  const [time, setTime] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setTime((time) => time + 1)
    }, 1000)
  }, [time])
  return <h2>You spend her {time} seconds</h2>
}

export default Timer

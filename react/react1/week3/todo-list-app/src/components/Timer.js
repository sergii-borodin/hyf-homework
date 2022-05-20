import React, { useEffect, useState } from 'react'

export const Timer = () => {
  const [time, setTime] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setTime((time) => time + 1)
    }, 1000)
  }, [time])
  return <h3>You spend her {time} seconds</h3>
}

export default Timer

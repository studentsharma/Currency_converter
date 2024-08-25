import React from 'react'

function Btn({text, height, width, size}) {
  return (
      <button className={`bg-blue-500  mt-5  mb-5 rounded-lg ${size} ${height} ${width} `}>{text}</button>
  )
}

export default Btn

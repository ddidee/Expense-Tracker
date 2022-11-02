import React from 'react'
import "./Button.css"

const Button = ({text, color}) => {
  return (
    <div className='Button'>
      <button style={{backgroundColor: {color}}}>{text}</button>
    </div>
  )
}

export default Button

import React from 'react'

const Button = ({text,type,needclass, onClick}) => {
  return (
    <button className={needclass} type={type} onClick={onClick}>{text}</button>
  )
}

export default Button
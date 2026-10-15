


import React from 'react'

const Button = ({name, onclick}) => {
  return (
    <div>

        <button onClick={onclick}> {name}</button>
    </div>
  )
}

export default Button
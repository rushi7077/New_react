import React, { createContext, useState } from 'react'

export const TextC = createContext()

function TextColorContext(props) {

    const [color, setColor] = useState('white')

  return (
    <div>
        <TextC.Provider value={[color,setColor]}>
            {props.children}
        </TextC.Provider>
    </div>
  )
}

export default TextColorContext

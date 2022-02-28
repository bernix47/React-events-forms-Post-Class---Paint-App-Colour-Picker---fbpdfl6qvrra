import React, { useState } from 'react'

export default function Selection(props) {
    const [style, setStyle] = useState({background: ''});
    console.log(props)
    const {applyColor} = props;
  return (
      <div className='fix-box' onClick={()=>{
          applyColor(setStyle)
      }} style={style}>
          <h2 className='subheading' >Selection</h2>
      </div> 
  )
}


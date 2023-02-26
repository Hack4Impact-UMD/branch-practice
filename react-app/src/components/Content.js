import React from 'react'
import { useState } from 'react';
import '../styles/Content.css';
function Content({text}) {
    const colors = ['_36DCBE','_50F5A5','_9DFC86'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const containerClass = `btnContainer ${colors[currentColorIndex]}`;
    
    function handleClick() {
        setCurrentColorIndex((currentColorIndex + 1) % colors.length);
    }

    return (
        <div className={containerClass}>
            <button className='btn' onClick = {handleClick}>
                {text}
            </button>
        </div>
  )
}

export default Content
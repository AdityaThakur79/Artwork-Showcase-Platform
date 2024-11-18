import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius }) => {
    return (
        <button type='button' style={{ backgroundColor: bgColor, color: color, borderRadius: borderRadius }} className={`text-${size} p-2 hover:drop-shadow-xl`}>
            {text}
        </button>
    )
}

export default Button

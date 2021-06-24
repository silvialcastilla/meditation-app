import React from 'react'
import './Image.css'

export const Image = ({src, alt, className}) => {
    return (
        <img src={src} alt={alt} className={className}></img>
    )
}

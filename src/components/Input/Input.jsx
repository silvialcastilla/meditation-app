import React from 'react';
import './Input.scss'

export const Input = ({className, name, type, placeholder}) => {
    return (
        <input type={type} className={className} name={name} placeholder={placeholder}/>
    )
}

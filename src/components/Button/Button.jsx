import React from 'react';
import './Button.css';

export const Button = ({alt, className, image ,title}) => {
    return (
        <button className={className}><img src={image} alt={alt}/>{title}</button>
    )
}

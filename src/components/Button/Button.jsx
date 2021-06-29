import React from 'react';
import './Button.css';

export const Button = ({alt, clase, className, image ,title}) => {
    return (
        <button className={className}><img className={clase}src={image} alt={alt}/>{title}</button>
    )
}

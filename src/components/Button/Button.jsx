import React from 'react';
import './Button.css';

export const Button = ({alt, clase, className, image ,title, onClick}) => {
    return (
        <button className={className} onClick={onClick}><img className={clase}src={image} alt={alt}/>{title}</button>
    )
}

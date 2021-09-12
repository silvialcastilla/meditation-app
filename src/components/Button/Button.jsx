import React from 'react';

export const Button = ({alt, clase, className, image ,title, onClick}) => {
    return (
        <button 
            className={className} 
            onClick={onClick}
        >
                {image === undefined 
                ? <></> 
                : <img 
                    className={clase}
                    src={image} 
                    alt={alt}
                /> 
                }
        {title}
        </button>
    )
}

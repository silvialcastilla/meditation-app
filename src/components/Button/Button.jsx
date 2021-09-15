import React from 'react';

export const Button = ({alt, classSpace, className, image ,title, onClick}) => {
    return (
        <button 
            className={className} 
            onClick={onClick}
        >
                {image === undefined 
                ? <></> 
                : <img 
                    className={classSpace}
                    src={image} 
                    alt={alt}
                /> 
                }
{title}
        </button>
    )
}

import React from 'react';

export const Paragraph = ({className, information, onClick}) => {
    return (
        <p className={className} onClick={onClick}>{information}</p>
    )
}

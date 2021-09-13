import React from 'react'

import './Paragraph.css'

export const Paragraph = ({className, information, onClick}) => {
    return (
        <p className={className} onClick={onClick}>{information}</p>
    )
}

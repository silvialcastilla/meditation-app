import React from 'react'

import './Paragraph.css'

export const Paragraph = ({className, information}) => {
    return (
        <p className={className}>{information}</p>
    )
}

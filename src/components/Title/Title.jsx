import React from 'react'
import './Title.css'

export const Title = ({className, title}) => {
    return (
        <h2 className={className}>{title}</h2>
    )
}

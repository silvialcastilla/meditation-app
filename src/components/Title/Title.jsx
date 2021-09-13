import React from 'react'
import './Title.scss'

export const Title = ({className, title}) => {
    return (
        <h2 className={className}>{title}</h2>
    )
}

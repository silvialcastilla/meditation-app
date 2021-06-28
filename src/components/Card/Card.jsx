import React from 'react'
import meditationcard from '../../assets/meditationcard.png'

export const Card = ({information}) => {
    return (
        <div>
            <img src={meditationcard} alt="img" width="100px" height="100px"></img>
            <p>{information}</p>
        </div>
    )
}

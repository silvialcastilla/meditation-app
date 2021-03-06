import React from 'react'
import {Title} from '../Title/Title'
import { Paragraph } from '../Paragraph/Paragraph'

export const Description = ({className, information, title}) => {
    return (
        <>
            <Title 
                className={className} 
                title={title}
            />
            <Paragraph 
                className={className} 
                information={information}
            />
        </>
    )
}

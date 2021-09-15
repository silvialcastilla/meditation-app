import React from 'react';
import { Card } from '../Card/Card'

export const CardList = ({data,className}) => {
    return (
        <div className={className}>
             {data.map(data => <Card information={data}/> )}
        </div>
    )
}

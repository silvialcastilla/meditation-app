import React from 'react';
import { Card } from '../Card/Card'

export const CardList = ({data}) => {
    return (
        <>
        {data.map(data => <Card information={data}/> )}
        </>
    )
}

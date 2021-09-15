import React from 'react'
import { Description } from '../../components/Description/Description'
import { CardList} from '../../components/CardList/CardList'


import data from '../../utils/data.json'

export const TopicPage = () => {
    return (
        <div className="topic">
            <Description
                className="title-topic"
                information="choose a topic to focuse on:"
                title="What Brings you to Silent Moon?"
            />
            <CardList
                data= {data.topics}
            />
        </div>
    )
}

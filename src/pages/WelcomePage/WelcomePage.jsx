import React from 'react'
import { Title } from '../../components/Title/Title';
import { Image } from '../../components/Image/Image';
import { Description } from '../../components/Description/Description';
import { Button } from '../../components/Button/Button';

import meditation from '../../assets/meditation.png'

export const WelcomePage = () => {
    return (
        <div className="welcome">
        <Title
            className="title-welcome"
            title="Silent Moon"
        />

        <Description
            className="description-welcome"
            information="Explore the app, Find some peace of mind to prepare for meditation."
            title="Hi, Welcome to Silent Moon"
        />
        <Image
            alt="image of a woman meditating"
            className="img-welcome"
            src={meditation}
        />
        <Button
            className="button-welcome"
            title="GET STARTED"
        />
    
        </div>
    )
}

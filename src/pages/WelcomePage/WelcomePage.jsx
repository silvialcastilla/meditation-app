import React from 'react'
import { Title } from '../../components/Title/Title';
import { Image } from '../../components/Image/Image';
import { useHistory } from "react-router-dom";


import { Description } from '../../components/Description/Description';
import { Button } from '../../components/Button/Button';

import meditation from '../../assets/meditation.png'

export const WelcomePage = () => {
    const history = useHistory();
    
    return (
        <div className="welcome">
        <Button
                alt="logout"
                className="button-logout"
                onClick={() => history.push("/")}
                title="logout"
        />
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
            className="button-welcome-start"
            onClick={() => history.push("/topic")}
            title="GET STARTED"
        />
        </div>
    )
}

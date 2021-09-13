import React from 'react';
import { Button } from '../../components/Button/Button';
import {Input} from '../../components/Input/Input';
import { Description } from '../../components/Description/Description';
import equis from '../../assets/equis.png';
import heart from '../../assets/heart.png';
import arrowleft from '../../assets/arrowleft.png';
import arrowright from '../../assets/arrowright.png';
import download from '../../assets/download.png';
import pause from '../../assets/pause.png'

export const MusicPage = () => {
     /* falta poner minimo y maximo*/  
    return (
        <div>
            <Button
                className="button-music-back"
                image={equis}
                clase="music-back-img"
            />
            <Button
                className="button-music-like"
                image={heart}
                clase="music-like-img"
            />
            <Button
                className="button-music-download"
                image={download}
            />
            <Button
                className="button-music-minutes-back"
                image={arrowleft}
                clase="music-arrowleft-img"
            />
            <Button
                className="button-music-pause"
                image={pause}
            />
            <Button
                className="button-music-minutes-goes"
                image={arrowright}
                clase="music-arrowright-img"
            />
            <Input
                type="range"  
            />
            <Description
                information="7 days of calm"
                title="Focus Attention"
            />
        </div>
        
    )
}

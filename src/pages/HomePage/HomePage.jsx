import React from 'react';
import { Title } from '../../components/Title/Title';
import { Image } from '../../components/Image/Image';
import { Description } from '../../components/Description/Description';
import { Button } from '../../components/Button/Button';
import { Paragraph } from '../../components/Paragraph/Paragraph';

import meditation from '../../assets/meditation.png';
import './HomePage.css'

export const HomePage = () => {
  return (
    <div className="home">
      <Title
        className="home-title"
        title="Silent Moon"
      />
      <Image
        alt="image of a woman meditating"
        className="home-img"
        src={meditation}
      />
      <Description
        information="Thousand of people are usign silent moon for smalls meditation"
        title="We are what we do"
        className="home-description"
      />
      <Button
        className="home-button"
        title="Sign Up"
      />
      <Paragraph
        className="home-paragraph"
        information="ALREADY HAVE AN ACCOUNT? LOG IN"
      />
    </div>
  )
}

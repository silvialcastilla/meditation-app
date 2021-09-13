import React, {useContext} from 'react';

import { useHistory } from "react-router-dom";

import { Title } from '../../components/Title/Title';
import { Image } from '../../components/Image/Image';
import { Description } from '../../components/Description/Description';
import { Button } from '../../components/Button/Button';
import { Paragraph } from '../../components/Paragraph/Paragraph';

import { LanguageContext } from "../../context/LanguageContext";


import meditation from '../../assets/meditation.png';
import datalanguage from '../../utils/languaje.json'

export const HomePage = () => {

  const { language } = useContext(LanguageContext);

  const history = useHistory();

  return (
    <div className="home">
      <Title
        className="title-home"
        title="Silent Moon"
      />
      <Image
        alt="image of a woman meditating"
        className="img-home"
        src={meditation}
      />
      <Description
        information={ language === 'en' ? datalanguage.homepage.description.en : datalanguage.homepage.description.es}
        title={ language === 'en' ? datalanguage.homepage.title.en : datalanguage.homepage.title.es}
        className="description-home"
      />
      <Button
        className="button-home"
        title={language === 'en' ? datalanguage.homepage.buttonSignUp.en : datalanguage.homepage.buttonSignUp.es}
        onClick={() => history.push('/sign-up')}
      />
      <Paragraph
        className="paragraph-home"
        information={language === 'en' ? datalanguage.homepage.paragraphAccount.en : datalanguage.homepage.paragraphAccount.es}
        onClick={() => history.push("/sign-in")}
      />
    </div>
  )
}

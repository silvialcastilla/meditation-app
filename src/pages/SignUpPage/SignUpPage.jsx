import React, {useContext} from 'react';
import { Title } from '../../components/Title/Title';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input'
import { Paragraph } from '../../components/Paragraph/Paragraph';

import { LanguageContext } from "../../context/LanguageContext";

import datalanguage from '../../utils/languaje.json'

import facebook from '../../assets/facebook.png';
import google from '../../assets/google.png';

export const SignUpPage = () => {

    const { language } = useContext(LanguageContext);

    return (
        <div>
            <Title
                className="sign-up-title"
                title={ language === 'en' ? datalanguage.signUpPage.title.en : datalanguage.signUpPage.title.es}
            />
            <Button
                alt="facebook icon"
                className="sign-in-button-facebook"
                image={facebook}
                title={ language === 'en' ? datalanguage.signUpPage.buttonFacebook.en : datalanguage.signUpPage.buttonFacebook.es}
            />
            <Button
                alt="google icon"
                className="sign-in-button-google"
                image={google}
                title={ language === 'en' ? datalanguage.signUpPage.buttonGoogle.en : datalanguage.signUpPage.buttonGoogle.es}
            />
            <Paragraph
                className="sign-in-paragraph-one"
                information={ language === 'en' ? datalanguage.signUpPage.paragraphLogIn.en : datalanguage.signUpPage.paragraphLogIn.es}
            />
            <Input
                className="sign-in-input-one"
                name="name"
                type="text" 
            />
            <Input
                className="sign-in-input-one"
                name="email"
                type="text" 
            />
            <Input
                className="sign-in-input-two"
                name="password"
                type="password" 
            />   
            <div>
                <Input
                    className="sign-in-input-two"
                    name="checkbox"
                    type="checkbox" 
                /> 
                <Paragraph
                    className="sign-in-paragraph-one"
                    information={ language === 'en' ? datalanguage.signUpPage.paragraphPrivatePolicy.en : datalanguage.signUpPage.paragraphPrivatePolicy.es}
                /> 
            </div>        
            <Button
                className="sign-in-button-google"
                title={ language === 'en' ? datalanguage.signUpPage.button.en : datalanguage.signUpPage.button.es}
            />
        </div>
    )
}

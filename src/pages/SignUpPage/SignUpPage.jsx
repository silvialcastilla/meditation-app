import React, {useContext} from 'react';
import { Title } from '../../components/Title/Title';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input'
import { Paragraph } from '../../components/Paragraph/Paragraph';

import { LanguageContext } from "../../context/LanguageContext";

import datalanguage from '../../utils/languaje.json'

import facebook from '../../assets/facebook.png';
import google from '../../assets/google.png';
import back from '../../assets/back.png'

import './SignUpPage.scss'

export const SignUpPage = () => {

    const { language } = useContext(LanguageContext);

    return (
        <div className="sign-up">
            <Button
                alt="back icon"
                className="sign-up-button-back"
                image={back}
            />
            <Title
                className="sign-up-title"
                title={ language === 'en' ? datalanguage.signUpPage.title.en : datalanguage.signUpPage.title.es}
            />
            <Button
                alt="facebook icon"
                className="sign-up-button-facebook"
                image={facebook}
                title={ language === 'en' ? datalanguage.signUpPage.buttonFacebook.en : datalanguage.signUpPage.buttonFacebook.es}
            />
            <Button
                alt="google icon"
                className="sign-up-button-google"
                image={google}
                title={ language === 'en' ? datalanguage.signUpPage.buttonGoogle.en : datalanguage.signUpPage.buttonGoogle.es}
            />
            <Paragraph
                className="sign-up-paragraph-one"
                information={ language === 'en' ? datalanguage.signUpPage.paragraphLogIn.en : datalanguage.signUpPage.paragraphLogIn.es}
            />
            <Input
                className="sign-up-input"
                name="name"
                type="text" 
                placeholder={ language === 'en' ? datalanguage.signUpPage.inputName.en : datalanguage.signUpPage.inputName.es}
            />
            <Input
                className="sign-up-input"
                name="email"
                type="text" 
                placeholder={ language === 'en' ? datalanguage.signUpPage.inputEmail.en : datalanguage.signUpPage.inputEmail.es}
            />
            <Input
                className="sign-up-input"
                name="password"
                type="password" 
                placeholder={ language === 'en' ? datalanguage.signUpPage.inputPassword.en : datalanguage.signUpPage.inputPassword.es}
            />   
            <div className="sign-up-checkbox">
                <Input
                    className="sign-up-input-checkbox"
                    name="checkbox"
                    type="checkbox"
                /> 
                <Paragraph
                    className="sign-up-paragraph-one"
                    information={ language === 'en' ? datalanguage.signUpPage.paragraphPrivatePolicy.en : datalanguage.signUpPage.paragraphPrivatePolicy.es}
                /> 
            </div>        
            <Button
                className="sign-up-button-facebook"
                title={ language === 'en' ? datalanguage.signUpPage.button.en : datalanguage.signUpPage.button.es}
            />
        </div>
    )
}

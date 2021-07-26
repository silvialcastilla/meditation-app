import React, {useContext} from 'react';
import { useHistory } from "react-router-dom";

import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input'
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { Title } from '../../components/Title/Title';

import { LanguageContext } from "../../context/LanguageContext";

import datalanguage from '../../utils/languaje.json'

import facebook from '../../assets/facebook.png';
import google from '../../assets/google.png';
import back from '../../assets/back.png'

import './SignInPage.scss'

export const SignInPage = () => {

    const history = useHistory();
    const { language } = useContext(LanguageContext);

    return (
        <div className="sign-in">
            <Button
                alt="back icon"
                className="sign-up-button-back"
                image={back}
            />
            <Title
                className="sign-in-title"
                title={ language === 'en' ? datalanguage.signInPage.title.en : datalanguage.signInPage.title.es}
            
            />
            <Button
                alt="facebook icon"
                className="sign-in-button-facebook"
                image={facebook}
                title={ language === 'en' ? datalanguage.signInPage.buttonFacebook.en : datalanguage.signInPage.buttonFacebook.es}
            />
            <Button
                alt="google icon"
                className="sign-in-button-google"
                image={google}
                title={ language === 'en' ? datalanguage.signInPage.buttonGoogle.en : datalanguage.signInPage.buttonGoogle.es}
            />
            <Paragraph
                className="sign-in-paragraph-one"
                information={ language === 'en' ? datalanguage.signInPage.paragraphLogIn.en : datalanguage.signInPage.paragraphLogIn.es}
                />
            <Input
                className="sign-in-input"
                name="email"
                type="text"
                placeholder={ language === 'en' ? datalanguage.signUpPage.inputEmail.en : datalanguage.signUpPage.inputEmail.es} 
            />
            <Input
                className="sign-in-input"
                name="password"
                type="password" 
                placeholder={ language === 'en' ? datalanguage.signUpPage.inputPassword.en : datalanguage.signUpPage.inputPassword.es}
            />
            <Button
                className="sign-in-button-facebook"
                title={ language === 'en' ? datalanguage.signUpPage.button.en : datalanguage.signUpPage.button.es}
                onClick={()=> history.push("welcome")}
            />
            {/* <Paragraph
                className="sign-in-paragraph-two"
                information={ language === 'en' ? datalanguage.signUpPage.paragraphPassword.en : datalanguage.signUpPage.paragraphPassword.es}
                /> */}
            {/* <Paragraph
                className="sign-in-paragraph-three"
                information={ language === 'en' ? datalanguage.signUpPage.paragraphAccount.en : datalanguage.signUpPage.paragraphAccount.es}
            /> */}

        </div>
    )
}

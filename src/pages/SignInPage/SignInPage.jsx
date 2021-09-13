import React, { useContext } from 'react';
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



export const SignInPage = () => {

    const history = useHistory();
    const { language } = useContext(LanguageContext);

    return (
        <div className="sign-in">
            <Button
                alt="back icon"
                className="button-sign-up-back"
                image={back}
                onClick={() => history.push("/")}
            />
            <Title
                className="title-sign-in"
                title={language === 'en' ? datalanguage.signInPage.title.en : datalanguage.signInPage.title.es}
            />
            <Button
                alt="facebook icon"
                className="button-sign-in-facebook"
                image={facebook}
                onClick={() => history.push("/")}
                title={language === 'en' ? datalanguage.signInPage.buttonFacebook.en : datalanguage.signInPage.buttonFacebook.es}
            />
            <Button
                alt="google icon"
                className="button-sign-in-google"
                image={google}
                onClick={() => history.push("/")}
                title={language === 'en' ? datalanguage.signInPage.buttonGoogle.en : datalanguage.signInPage.buttonGoogle.es}
            />
            <Paragraph
                className="paragraph-sign-in-one"
                information={language === 'en' ? datalanguage.signInPage.paragraphLogIn.en : datalanguage.signInPage.paragraphLogIn.es}
                onClick={() => history.push("/sign-up")}
            />
            <Input
                className="input-sign-in"
                name="email"
                type="text"
                placeholder={language === 'en' ? datalanguage.signUpPage.inputEmail.en : datalanguage.signUpPage.inputEmail.es}
            />
            <Input
                className="input-sign-in"
                name="password"
                type="password"
                placeholder={language === 'en' ? datalanguage.signUpPage.inputPassword.en : datalanguage.signUpPage.inputPassword.es}
            />
            <Button
                className="button-sign-in-facebook"
                title={language === 'en' ? datalanguage.signUpPage.button.en : datalanguage.signUpPage.button.es}
                onClick={() => history.push("welcome")}
            />
            <Paragraph
                className="paragraph-sign-in-two"
                information={language === 'en' ? datalanguage.signInPage.paragraphPWD.en : datalanguage.signInPage.paragraphPWD.es}
                onClick={() => history.push("/")}
            />
            <Paragraph
                className="paragraph-sign-in-three"
                information={language === 'en' ? datalanguage.signInPage.paragraphAccount.en : datalanguage.signInPage.paragraphAccount.es}
                onClick={() => history.push("/sign-up")}
            />

        </div>
    )
}

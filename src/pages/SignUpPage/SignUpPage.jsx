import React, {useContext} from 'react';
import { useHistory } from "react-router-dom";

import { Title } from '../../components/Title/Title';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input'
import { Paragraph } from '../../components/Paragraph/Paragraph';

import { LanguageContext } from "../../context/LanguageContext";

import datalanguage from '../../utils/languaje.json'

import facebook from '../../assets/facebook.png';
import google from '../../assets/google.png';
import back from '../../assets/back.png';


export const SignUpPage = () => {

    const history = useHistory();
    const { language } = useContext(LanguageContext);

    return (
        <div className="sign-up">
            <Button
                alt="back icon"
                className="button-sign-up-back"
                image={back}
                onClick={() => history.push("/")}
            />
            <Title
                className="title-sign-up"
                title={ language === 'en' ? datalanguage.signUpPage.title.en : datalanguage.signUpPage.title.es}
            />
            <Button
                alt="facebook icon"
                className="button-sign-up-facebook"
                image={facebook}
                onClick={() => history.push("/")}
                title={ language === 'en' ? datalanguage.signUpPage.buttonFacebook.en : datalanguage.signUpPage.buttonFacebook.es}
            />
            <Button
                alt="google icon"
                className="button-sign-up-google"
                image={google}
                onClick={() => history.push("/")}
                title={ language === 'en' ? datalanguage.signUpPage.buttonGoogle.en : datalanguage.signUpPage.buttonGoogle.es}
            />
            <Paragraph
                className="paragraph-sign-up-one"
                information={ language === 'en' ? datalanguage.signUpPage.paragraphLogIn.en : datalanguage.signUpPage.paragraphLogIn.es}
                onClick={() => history.push("/sign-in")}
            />
            <Input
                className="input-sign-up"
                name="name"
                type="text" 
                placeholder={ language === 'en' ? datalanguage.signUpPage.inputName.en : datalanguage.signUpPage.inputName.es}
            />
            <Input
                className="input-sign-up"
                name="email"
                type="text" 
                placeholder={ language === 'en' ? datalanguage.signUpPage.inputEmail.en : datalanguage.signUpPage.inputEmail.es}
            />
            <Input
                className="input-sign-up"
                name="password"
                type="password" 
                placeholder={ language === 'en' ? datalanguage.signUpPage.inputPassword.en : datalanguage.signUpPage.inputPassword.es}
            />   
            <div className="checkbox-sign-up">
                <Input
                    className="input-sign-up-checkbox"
                    name="checkbox"
                    type="checkbox"
                /> 
                <Paragraph
                    className="paragraph-sign-up-one"
                    information={ language === 'en' ? datalanguage.signUpPage.paragraphPrivatePolicy.en : datalanguage.signUpPage.paragraphPrivatePolicy.es}
                /> 
            </div>        
            <Button
                className="button-sign-up-facebook"
                onClick={() => history.push("/welcome")}
                title={ language === 'en' ? datalanguage.signUpPage.button.en : datalanguage.signUpPage.button.es}
            />
        </div>
    )
}

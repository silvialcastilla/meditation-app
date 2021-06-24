import React from 'react';
import { Title } from '../../components/Title/Title';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input'
import { Paragraph } from '../../components/Paragraph/Paragraph';

import facebook from '../../assets/facebook.png';
import google from '../../assets/google.png';

export const SignUpPage = () => {
    return (
        <div>
            <Title
                className="sign-up-title"
                title="Create your account"
            />
            <Button
                alt="facebook icon"
                className="sign-in-button-facebook"
                image={facebook}
                title="CONTINUE WITH FACEBOOK"
            />
            <Button
                alt="google icon"
                className="sign-in-button-google"
                image={google}
                title="CONTINUE WITH GOOGLE"
            />
            <Paragraph
                className="sign-in-paragraph-one"
                information="OR LOG IN WITH EMAIL"
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
            <Paragraph
                className="sign-in-paragraph-one"
                information="I have read the Privace Policy "
            />         
            <Input
                className="sign-in-input-two"
                name="checkbox"
                type="checkbox" 
            /> 
            <Button
                className="sign-in-button-google"
                title="GET STARTED"
            />
        </div>
    )
}

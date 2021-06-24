import React from 'react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input'
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { Title } from '../../components/Title/Title';

import facebook from '../../assets/facebook.png';
import google from '../../assets/google.png';

export const SignInPage = () => {
    return (
        <div>
            <Title
                className="sign-in-title"
                title="Welcome Back!"
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
                name="email"
                type="text" 
            />
            <Input
                className="sign-in-input-two"
                name="password"
                type="password" 
            />
            <Button
                className="sign-in-button-google"
                title="LOG IN"
            />
            <Paragraph
                className="sign-in-paragraph-two"
                information="Forgot Password"
            />
            <Paragraph
                className="sign-in-paragraph-three"
                information="ALREADY HAVE AN ACCOUNT? SIGN IN"
            />

        </div>
    )
}

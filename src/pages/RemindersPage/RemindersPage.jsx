import React from 'react';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

export const RemindersPage = () => {
    return (
        <div>
            <Input type="time" name="hour"/>
            <Input type="radio" name="M"/>
            <Input type="radio" name="T"/>
            <Input type="radio" name="W"/>
            <Input type="radio" name="TH"/>
            <Input type="radio" name="F"/>
            <Input type="radio" name="S"/>
            <Button title="SAVE"/>
            <Button title="NO THANKS"/>
        </div>
    )
}

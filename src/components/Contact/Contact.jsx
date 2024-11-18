import React from 'react';
import { AlignColumn, Divider, Title } from '../About/AboutStyle';
import { EmailButton, SubHeader } from './ContactStyle';

export default function Contact() {
    return(
        <AlignColumn id="Contact">
            <Title>Connect With Me!</Title>
            <Divider />
            <EmailButton link="https://www.linkedin.com/in/paige-lekach/" linkedin={true}/>
        </AlignColumn>
    );
}
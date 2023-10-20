import React from 'react';
import { AlignColumn, Divider, Title } from '../About/AboutStyle';
import { EmailButton, SubHeader } from './ContactStyle';

export default function Contact() {
    return(
        <AlignColumn id="Contact">
            <Title>Chat With Me!</Title>
            <Divider />
            <SubHeader>Connect with me on LinkedIn!<br/></SubHeader>
            <EmailButton link="https://www.linkedin.com/in/paige-lekach/" linkedin={true}/>
            <SubHeader style={{fontWeight: "700"}}>
                OR
            </SubHeader>
            <EmailButton link="mailto: paige.lekach@gmail.com"/>
        </AlignColumn>
    );
}
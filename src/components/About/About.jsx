import React from 'react';
import { AlignColumn, Divider, TextParagraph, Title } from './AboutStyle';

export default function About () {

    return(
        <AlignColumn id="About">
            <Title>About</Title>
            <Divider />
            <br/>
            <TextParagraph>
                Hello, my name is Paige Lekach and I am a front-end engineer based in Calgary, AB.<br/><br/>
                I am a recent graduate of the University of Alberta from the Computer Software Engineering Faculty.<br/><br/>

                I have experience working in start-up and larger environments as well as working freelance.<br/><br/>

                I have mainly worked in the front-end realm but have experience with back-end projects as well.<br/><br/>
            </TextParagraph>
        </AlignColumn>
    )
}
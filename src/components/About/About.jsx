import React from 'react';
import { AlignColumn, Divider, TextParagraph, Title } from './AboutStyle';

export default function About () {

    return(
        <AlignColumn id="About">
            <Title>About</Title>
            <Divider />
            <br/>
            <TextParagraph>
                Hello, my name is Paige Lekach and I am a software engineer based in Calgary, AB.<br/><br/>
                I am a graduate of the University of Alberta, where I majored in Computer Software Engineering.<br/><br/>

                I have experience working in start-up and larger corporate environments as well as working freelance.<br/><br/>

                I have mainly worked in a full-stack engineering capacity but I am interested in transitioning <br/>into the front-end engineering space.<br/><br/>
            </TextParagraph>
        </AlignColumn>
    )
}
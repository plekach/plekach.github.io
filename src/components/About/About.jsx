import React from 'react';
import { AlignColumn, Divider, TextParagraph, Title } from './AboutStyle';

export default function About () {

    return(
        <AlignColumn id="About">
            <Title>About</Title>
            <Divider />
            <div style={{fontSize: "15pt"}}>Hello!</div>
            <br/>
            <TextParagraph>
                My name is Paige Lekach and I’m a front-end engineer based currently in Calgary, AB.<br/><br/>
                I am a recent graduate of the University of Alberta from the Computer Software Faculty.<br/><br/>

                I have experience working in start-up environments and larger established environments as a well as working as a freelance developer.<br/><br/>

                I have mainly worked in the front-end realm but have experience with back-end projects as well.<br/><br/>

                I’m actively looking for work in Canada and am open to chat about potential opportunities!<br/>
            </TextParagraph>
        </AlignColumn>
    )
}
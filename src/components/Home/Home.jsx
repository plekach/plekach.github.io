import React from 'react';
import { FlexAlign, Picture, ResumeButton, SubTitle, Title } from './HomeStyle';
import { MEDIUM_GREEN } from '../../utils/constants';

export default function Home() {
    return(
            <FlexAlign id='Home'>
                <Title>
                    Software<br/>Engineer
                    <SubTitle>
                        Based in <span style={{color: MEDIUM_GREEN}}>Calgary, AB</span>
                    </SubTitle>
                    <ResumeButton />
                </Title>
                <Picture src={require("../../utils/ProfileArt.png")}/>
            </FlexAlign>
    )
}
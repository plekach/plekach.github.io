import React from 'react';
import { Divider, Title } from '../About/AboutStyle';
import { Center, Pair, Screen } from './MyWorkStyle';

export default function MyWork() {
    return (
        <Center id="MyWork">
            <Title>My Work</Title>
            <Divider />

            <Pair>
                <div style={{flex: "1"}}><Screen src={require("../../utils/Sahit.png")}/></div>
                <div style={{flex: "2"}}>
                    As a freelance web developer, worked closely with clients on developing a web application for the medical statistic model used by neurosurgeons. <br/> <br/>
                    Front-End designed with Figma and implemented with React.JS with JavaScript.<br/><br/>
                </div>
            </Pair>
            <Pair>
                <div style={{flex: "1"}}><Screen src={require("../../utils/Uevents.png")}/></div>
                <div style={{flex: "2"}}>
                A social events application intended for U of A students to discover social events and clubs hosted by university student groups.<br/> <br/>

                Developed in team setting, I lead the front-end design and development of the platform.<br/><br/>

                Front-End designed with Figma and implemented with React.JS with JavaScript.<br/><br/>
                Back-end utilizes Node.JS and Express.JS and interfaces with DynamoDB, SendGrid, and S3.
                </div>
            </Pair>
            <Pair>
                <div style={{flex: "1"}}><Screen src={require("../../utils/EpicApp.png")}/></div>
                <div style={{flex: "2"}}>
                Social based posting site developed in team setting. <br/> <br/>
                Assisted in front-end design and development of the platform.<br/><br/>
                Front-end utilizes Next.JS with JavaScript and Tailwind CSS.<br/><br/>
                Back-end utilizes Django with Python.
                </div>
            </Pair>
        </Center>
    );
}
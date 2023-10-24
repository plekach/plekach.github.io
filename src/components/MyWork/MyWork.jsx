import React from 'react';
import { Divider, Title } from '../About/AboutStyle';
import { Center, Description, Pair, SContainer, Screen, SubProject } from './MyWorkStyle';

export default function MyWork() {
    return (
        <Center id="MyWork">
            <Title>My Work</Title>
            <Divider />

            <Pair>
                <SContainer ><Screen src={require("../../utils/Sahit.png")}/></SContainer>
                <Description >
                    <SubProject>Web Development (Contract)</SubProject>
                    As a freelance web developer, worked closely with clients on developing a web application for the medical statistic model used by neurosurgeons. <br/> <br/>
                    Front-End designed with Figma and implemented with React.JS with JavaScript.<br/><br/>
                </Description>
            </Pair>
            <Pair>
                <SContainer><Screen src={require("../../utils/Uevents.png")}/></SContainer>
                <Description >
                    <SubProject>Engineering Capstone</SubProject>
                    A social events application intended for U of A students to discover social events and clubs hosted by university student groups.<br/> <br/>

                    Developed in team setting, I lead the front-end design and development of the platform.<br/><br/>

                    Front-End designed with Figma and implemented with React.JS with JavaScript.<br/><br/>
                    Back-end utilizes Node.JS and Express.JS and interfaces with DynamoDB, SendGrid, and S3.
                </Description>
            </Pair>
            <Pair>
                <SContainer><Screen src={require("../../utils/EpicApp.png")}/></SContainer>
                <Description >
                    <SubProject>Web Development Capstone</SubProject>
                    Social based posting site developed in team setting. <br/> <br/>
                    Assisted in front-end design and development of the platform.<br/><br/>
                    Front-end utilizes Next.JS with JavaScript and Tailwind CSS.<br/><br/>
                    Back-end utilizes Django with Python.
                </Description>
            </Pair>
        </Center>
    );
}
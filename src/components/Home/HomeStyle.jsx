import styled from '@emotion/styled';
import React from 'react';
import { BLACK, DARK_GREEN, LIGHT_GREEN, MEDIUM_GREEN, WHITE } from '../../utils/constants';
import { Button } from '@mui/material';

export const FlexAlign = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 70pt;
`;

export const Title = styled.div`
    text-align: center;
    font-size: 40pt;
    margin-top: 10pt;
`;

export const Picture = styled.img`
    height: 50%;
`;

export const SubTitle = styled.div`
    font-size: 25pt;
`;

export const ProfilePicture = styled.div`
    height: 100pt;
    width: 100pt;
    background: ${MEDIUM_GREEN};
`;

export const ResumeButton = () => {
    return (
        <a href={require("../../utils/Paige_Lekach_Resume.pdf")} target="_blank">
        <Button
            sx={{
                backgroundColor: LIGHT_GREEN,
                color: BLACK,
                borderColor: DARK_GREEN,
                fontSize: "15pt",
                borderRadius: "100pt",
                paddingLeft: "20pt",
                paddingRight: "20pt",
                marginTop: "15pt",
                marginBottom: "15pt",
                fontWeight: "700",
                marginLeft: "auto",
                textTransform: "none",
                marginRight: "5pt",
                '&:hover': {
                    backgroundColor: DARK_GREEN,
                    color: WHITE
                }
            }}>Resume </Button></a>
    )
}

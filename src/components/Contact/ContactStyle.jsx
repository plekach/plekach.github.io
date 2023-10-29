import React from 'react';
import { BLACK, DARK_GREEN, LIGHT_GREEN, WHITE } from '../../utils/constants';
import styled from 'styled-components';
import { Button, Tooltip } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const SubHeader = styled.div`
    text-align: center;
    margin-top: 20pt;
    margin-bottom: 10pt;
    font-size: min(15pt, 5vw);
    color: ${BLACK};
`;

export const Email = styled.div`
    background: ${LIGHT_GREEN};
    color: ${DARK_GREEN};
    border-radius: 20pt;
    font-size: 15pt;
    &:hover .email_button {
        background: ${DARK_GREEN};
        color: ${WHITE};
    }
`;

export const EmailButton = ({linkedin = false, link}) => {
    return (
        <Tooltip title={linkedin ? "": "paige.lekach@gmail.com"} placement='top' >
        <Button
            sx={{
                backgroundColor: DARK_GREEN,
                fontSize: "15pt",
                borderRadius: "100pt",
                paddingLeft: "20pt",
                paddingRight: "20pt",
                marginTop: "15pt",
                marginBottom: "15pt",
                '&:hover': {
                    backgroundColor: LIGHT_GREEN,
                }
            }}><a style={{color: WHITE, textDecoration: "none", textTransform: "none"}} href={link}>{linkedin ? <LinkedInIcon sx={{marginTop: "5pt"}} fontSize='medium'/>: "Email Me!"}</a></Button>
            </Tooltip>
    )
}
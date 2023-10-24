import React from 'react';
import styled from '@emotion/styled';
import { LIGHT_GREEN, MEDIUM_GREEN, WHITE } from '../../utils/constants';

export const Center = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`;

export const Screen = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 50pt 50pt 0pt 0pt;
`;

export const SContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Description = styled.div`
    flex: 2;
    margin: 20pt 20pt 20pt 20pt;
`;

export const Pair = styled.div`
    max-width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: ${WHITE};
    box-shadow: ${LIGHT_GREEN} 0pt 4pt 3pt;
    margin-bottom: 10pt;
    max-width: 450pt;
    border-radius: 50pt;
    margin-left: 10pt;
    margin-right: 10pt;
`;

export const SubProject = styled.div`
    color: ${MEDIUM_GREEN};
    font-weight: 600;
    margin-bottom: 10pt;
    text-align: center;
`;
import React from 'react';
import styled from '@emotion/styled';
import { LIGHT_GREEN, MEDIUM_GREEN } from '../../utils/constants';

export const Center = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`;

export const Screen = styled.img`
    height: 150pt;
    border: 1pt solid ${LIGHT_GREEN};
    border-radius: 15pt;
`;

export const SContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20pt;
    margin-left: 10pt;
`;

export const Description = styled.div`
    flex: 2;
    margin: 10pt 20pt 10pt 20pt;
`;

export const Pair = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
`;

export const SubProject = styled.div`
    color: ${MEDIUM_GREEN};
    font-weight: 600;
    text-decoration: underline;
    margin-bottom: 10pt;
`;
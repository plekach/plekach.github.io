import React from 'react';
import styled from 'styled-components';
import { LIGHT_GREEN, MEDIUM_GREEN } from '../../utils/constants';

export const AlignColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    margin-top: 40pt;
    font-weight: bold;
    font-size: min(35pt, 10vw);
    color: ${MEDIUM_GREEN};
`;

export const Divider = styled.hr`
    border-top: 1pt solid ${LIGHT_GREEN};
    width: 70pt;
`;

export const TextParagraph = styled.div`
    margin-left: 20pt;
    margin-right: 20pt;
    margin-bottom: 40pt;
    font-size: min(15pt, 5vw);
`;

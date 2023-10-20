import React from 'react';
import styled from 'styled-components';
import { LIGHT_GREEN, MEDIUM_GREEN } from '../../utils/constants';

export const AlignColumn = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    font-weight: bold;
    font-size: 35pt;
    color: ${MEDIUM_GREEN};
`;

export const Divider = styled.hr`
    border-top: 1pt solid ${LIGHT_GREEN};
    width: 70pt;
`;

export const TextParagraph = styled.div`
    margin-left: 40pt;
    margin-right: 40pt;
    font-size: 15pt;
`;

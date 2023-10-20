import React from 'react';
import styled from '@emotion/styled';
import { LIGHT_GREEN } from '../../utils/constants';

export const Center = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`

export const Screen = styled.img`
    width: 350pt;
    margin: 25pt;
    border: 1pt solid ${LIGHT_GREEN};
    border-radius: 15pt;
`;

export const Pair = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;
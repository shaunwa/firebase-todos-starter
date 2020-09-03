import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    background-color: ${props => props.backgroundColor ?? '#ccffdd'};
    outline: none;
    cursor: pointer;
`;

const PageBackground = styled.div`
    background-color: #eee;
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;

const ContentBox = styled.div`
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
`;

export const CenteredContentBox = ({ children }) =>
    <PageBackground>
        <ContentBox>
            {children}
        </ContentBox>
    </PageBackground>
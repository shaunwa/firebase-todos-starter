import React from 'react';
import styled from 'styled-components';
import {
    Button,
    CenteredContentBox,
} from '../ui';

const Form = styled.div`
    width: 350px;
    margin: 32px;
`;

const FullWidthButton = styled(Button)`
    display: block;
    width: 100%;
`;

const Heading = styled.h1`
    text-align: center;
`;

const withTopMargin = px => ({ marginTop: `${px}px` });

export const SignInPage = () => {
    const onSignInWithGoogleClicked = async () => {
        // Firebase logic for signing in a user goes here
        alert('You need to implement this!');
    }

    return (
        <CenteredContentBox>
            <Form>
                <Heading>My Todos App</Heading>
                <FullWidthButton
                    style={withTopMargin(8)}
                    onClick={onSignInWithGoogleClicked}
                >Sign In With Google</FullWidthButton>
            </Form>
        </CenteredContentBox>
    );
}
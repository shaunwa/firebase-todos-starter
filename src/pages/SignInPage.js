import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import {
    Button,
    CenteredContentBox,
} from '../ui';

const Form = styled.div`
    width: 350px;
    margin: 32px;

    input {
        display: block;
        font-size: 16px;
        padding: 8px;
        border: none;
        border-bottom: 2px solid #ddd;
        border-radius: 8px;
        margin-bottom: 16px;
        width: 100%;
        outline: none;
    }
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignInClicked = async () => {
        firebase.auth().signInWithEmailAndPassword(email, password);
    }

    return (
        <CenteredContentBox>
            <Form>
                <Heading>My Todos App</Heading>
                <label>
                    Email Address:
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </label>
            </Form>
            <FullWidthButton onClick={onSignInClicked}>Sign in</FullWidthButton>
        </CenteredContentBox>
    );
}
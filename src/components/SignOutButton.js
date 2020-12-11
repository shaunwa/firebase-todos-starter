import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import { Button } from '../ui';

export const StyledButton = styled(Button)`
    background-color: #ed0d25;
    margin: 16px auto;
`;

/*
    This button allows users to sign out once they've
    been signed in with Firebase Auth
*/
export const SignOutButton = () => {
    const onClickSignOut = async () => {
        firebase.auth().signOut();
    }

    return (
        <StyledButton
            onClick={onClickSignOut}
        >Sign Out</StyledButton>
    );
}
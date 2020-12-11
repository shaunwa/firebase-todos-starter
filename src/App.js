import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import { SignInPage, TodosPage } from './pages';
import './App.css';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

const App = () => {
    // These are set opposite what you might expect 
    // so that you can actually see the app. Once we
    // implement authentication, we'll flip them
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthed, setIsAuthed] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setIsAuthed(true);
            } else {
                setIsAuthed(false);
            }
            setIsLoading(false);
        });
    }, []);

    return isLoading
        ? <h1>Loading...</h1>
        : <AppContainer className="App">
            {isAuthed
                ? <TodosPage />
                : <SignInPage />
            }
        </AppContainer>
}

export default App;

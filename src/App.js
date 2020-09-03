import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthed, setIsAuthed] = useState(true);

    useEffect(() => {
        // Check to see if the user is authed here
        // and update the state vars accordingly
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

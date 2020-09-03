import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../ui';

const NewTodoContainer = styled.div`
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;

    input {
        font-size: 16px;
        padding: 8px;
        border: none;
        border-bottom: 2px solid #ddd;
        border-radius: 8px;
        width: 70%;
        outline: none;
    }
`;

const NewTodoButton = styled(Button)`
    margin-left: 8px;
    width: 20%;
`;

export const NewTodoForm = ({ isLoading, todos, onAddTodo }) => {
    const [inputValue, setInputValue] = useState('');
    const [showError, setShowError] = useState(false);

    return (
        <NewTodoContainer>
            {showError
                ? <div>There&apos;s already an item with that text!</div>
                : null}
            <input
                type="text"
                value={inputValue}
                disabled={isLoading}
                placeholder="Type your new todo here"
                onChange={(e) => setInputValue(e.target.value)}
            />
            <NewTodoButton onClick={() => {
                if (todos.some((todo) => inputValue === todo.text)) {
                    setShowError(true);
                } else if (inputValue) {
                    onAddTodo(inputValue);
                    setShowError(false);
                    setInputValue('');
                }
            }}
            >
                Create Todo
            </NewTodoButton>
        </NewTodoContainer>
    );
};
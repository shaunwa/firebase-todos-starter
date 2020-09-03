import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NewTodoForm, TodoList } from '../todos';
import { SignOutButton } from '../components';

const TodoContainer = styled.div`
    max-width: 700px;
    margin: auto;
`;

const TodosHeading = styled.h1`
    text-align: center;
`;

// These are fake todos that we'll get rid of
// once we add Firebase's Firestore
const fakeTodos = [{
    id: 'ae06181d-92c2-4fed-a29d-fb53a6301eb9',
    text: 'Learn about React Ecosystems',
    isCompleted: false,
    createdAt: new Date(),
}, {
    id: 'cda9165d-c263-4ef6-af12-3f1271af5fb4',
    text: 'Get together with friends',
    isCompleted: false,
    createdAt: new Date(Date.now() - 86400000 * 7),
}, {
    id: '2e538cc5-b734-4771-a109-dfcd204bb38b',
    text: 'Buy groceries',
    isCompleted: true,
    createdAt: new Date(Date.now() - 86400000 * 14),
}];

export const TodosPage = () => {
    // The starting values here will need to change
    // once we add Firestore
    const [isLoading, setIsLoading] = useState(false);
    const [todos, setTodos] = useState(fakeTodos);

    useEffect(() => {
        const loadTodos = async () => {
            // Logic for loading todos from
            // Firestore goes here
        }

        loadTodos();
    }, []);

    const onAddTodo = async (inputValue) => {
        // Logic for creating new todos goes here
        alert('You need to implement this!');
    };

    const onRemoveTodo = async (id) => {
        // Logic for creating new todos goes here
        alert('You need to implement this!');
    }

    const onMarkTodoAsCompleted = async (id) => {
        // Logic for creating new todos goes here
        alert('You need to implement this!');
    }

    return (
        <TodoContainer>
            <TodosHeading>Todos</TodosHeading>
            <NewTodoForm
                isLoading={isLoading}
                todos={todos}
                onAddTodo={onAddTodo} />
            <TodoList
                isLoading={isLoading}
                todos={todos}
                onMarkTodoAsCompleted={onMarkTodoAsCompleted}
                onRemoveTodo={onRemoveTodo} />
            <SignOutButton />
        </TodoContainer>
    );
}
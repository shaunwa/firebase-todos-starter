import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import { NewTodoForm, TodoList } from '../todos';
import { SignOutButton } from '../components';

const TodoContainer = styled.div`
    max-width: 700px;
    margin: auto;
`;

const TodosHeading = styled.h1`
    text-align: center;
`;

export const TodosPage = () => {
    // The starting values here will need to change
    // once we add Firestore
    const [isLoading, setIsLoading] = useState(true);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const currentUserId = firebase.auth().currentUser.uid;
        firebase.firestore()
            .collection('todos')
            .where('userId', '==', currentUserId)
            .onSnapshot(querySnapshot => {
                const documentSnapshots = querySnapshot.docs;
                const todos = documentSnapshots.map(doc => ({
                    ...doc.data(),
                    createdAt: doc.data().createdAt.toDate(),
                    id: doc.id,
                }));
                setTodos(todos);
                setIsLoading(false);
            });
    }, []);

    const onAddTodo = async (inputValue) => {
        const currentUser = firebase.auth().currentUser;
        const newTodo = {
            userId: currentUser.uid,
            text: inputValue,
            isCompleted: false,
            createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        };

        await firebase.firestore().collection('todos').add(newTodo);
    };

    const onRemoveTodo = async id => {
        await firebase.firestore().collection('todos')
            .doc(id)
            .delete();
    }

    const onMarkTodoAsCompleted = async id => {
        await firebase.firestore().collection('todos')
            .doc(id)
            .update({ isCompleted: true });
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
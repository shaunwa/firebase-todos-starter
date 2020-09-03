import React from 'react';
import styled from 'styled-components';
import { Button } from '../ui';

const ListItem = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

const ButtonsWrap = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const ListItemButton = styled(Button)`
    display: inline-block;
`;

const CompletedButton = styled(ListItemButton)`
    background-color: #22ee22;
`;

const RemoveButton = styled(ListItemButton)`
    background-color: #ee2222;
    margin-left: 8px;
`;

export const TodoList = ({
    todos,
    isLoading,
    onMarkTodoAsCompleted,
    onRemoveTodo,
}) => {
    const loadingtext = <div>Loading Todos...</div>;

    const content = (
        <div>
            {todos.map((todo) => {
                const { id, text, createdAt: createdAtString, isCompleted } = todo;
                const createdAt = new Date(createdAtString);

                return (
                    <ListItem key={id} createdAt={createdAt}>
                        <h3>{text}</h3>
                        <p>
                            Created at:&nbsp;
                            {createdAt.toLocaleDateString()}
                        </p>
                        <ButtonsWrap>
                            <CompletedButton
                                onClick={() => onMarkTodoAsCompleted(id)}
                            >
                                {isCompleted ? 'Complete!' : 'Mark As Completed'}
                            </CompletedButton>
                            <RemoveButton onClick={() => onRemoveTodo(id)}>Remove</RemoveButton>
                        </ButtonsWrap>
                    </ListItem>
                );
            })}
        </div>
    );

    return isLoading ? loadingtext : content;
};
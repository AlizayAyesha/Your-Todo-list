// hooks/useTodos.ts
import { useState } from 'react';
import { Todo } from '../types/todo';
import { dummyData } from '../data/todos';

export default function useTodos() {
    const [todos, setTodos] = useState<Todo[]>(dummyData);

    const addTodo = (title: string) => {
        setTodos((prevTodos) => [
            {
                id: prevTodos.length ? prevTodos[prevTodos.length - 1].id + 1 : 1,
                text: title,
                completed: false,
            },
            ...prevTodos,
        ]);
    };

    const setTodosCompleted = (id: number, completed: boolean) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const deleteAllCompleted = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
    };

    return {
        todos,
        setTodosCompleted,
        addTodo,
        deleteTodo, // Add this function
        deleteAllCompleted,
    };
}

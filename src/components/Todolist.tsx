import React from 'react';
import TodoItem from './todositem'; // Ensure correct import
import { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onCompletedChange, onDelete }) => {
  console.log("Todos in TodoList:", todos); // Debugging line

  return (
    <div>
      {todos.length === 0 ? (
        <p className='text-center'>No todos left! Add a new one above</p>
      ) : (
        <div className='space-y-2'>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCompletedChange={onCompletedChange}
              onDelete={onDelete} // Ensure onDelete is being passed correctly
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;

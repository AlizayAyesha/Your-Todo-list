import React from 'react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onCompletedChange, onDelete }) => {
  const handleCheckboxChange = () => {
    onCompletedChange(todo.id, !todo.completed);
  };

  const handleDeleteClick = () => {
    console.log('Delete button clicked'); // Debugging line
    onDelete(todo.id);
  };

  return (
    <div className='flex items-center border rounded-md bg-blue-200'>
      <label className='flex items-center gap-4 border rounded-s-md p-2 border-gray-300 bg-blue-600 hover:bg-blue-400 w-96 '>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={handleCheckboxChange}
          className='mr-2'
        />
        <span className={todo.completed ? 'line-through text-gray-400 ' : ''}>{todo.text}</span>
      </label>
      <button 
        onClick={handleDeleteClick}
        className='text-white rounded-r-md bg-red-600 hover:bg-red-400 w-32 p-2'>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;

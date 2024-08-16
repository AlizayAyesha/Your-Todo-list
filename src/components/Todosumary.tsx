// components/TodoSummary.tsx
import React from 'react';
import { Todo } from '../types/todo';

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

const TodoSummary: React.FC<TodoSummaryProps> = ({
  todos,
  deleteAllCompleted
}) => {
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium">
        {completedTodos.length}/{todos.length} Todos Completed
      </p>
      {completedTodos.length > 0 && (
        <button
          onClick={deleteAllCompleted}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          aria-label="Delete all completed todos"
        >
          Delete All Completed
        </button>
      )}
    </div>
  );
}

export default TodoSummary;

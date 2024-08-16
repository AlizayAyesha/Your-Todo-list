import React, { useState } from 'react';

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (input.trim()) {
      onSubmit(input.trim());
      setInput('');
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className='flex '>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='w-96 rounded-l-md border border-gray-500 p-2 mb-4' 
        type='text'
        placeholder='Enter a new todo'
      />
      <button
        type='submit'
        className='w-32 rounded-r-md bg-blue-700 text-white hover:bg-blue-500 mb-4'
      >
        Add
      </button>
    </form>
    </div>
  );
};

export default AddTodoForm;

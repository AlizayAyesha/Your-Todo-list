// App.tsx
import React from 'react';
import useTodos from './hooks/useTodos';
import AddTodoForm from './components/AddTodosForm';
import TodoList from './components/Todolist';
import TodoSummary from './components/Todosumary';

function App() {
    const { todos, addTodo, setTodosCompleted, deleteTodo, deleteAllCompleted } = useTodos();

    console.log("Todos in App:", todos); 

    return (
        <main className='py-10 h-screen space-y-6'>
            <h1 className="text-3xl font-bold text-center">Your Todos</h1>
            <div className='max-w-lg mx-auto'>
                <AddTodoForm onSubmit={addTodo} />
                <TodoList
                    todos={todos}
                    onCompletedChange={setTodosCompleted}
                    onDelete={deleteTodo} // Use deleteTodo from useTodos
                />
                <TodoSummary
                    todos={todos}
                    deleteAllCompleted={deleteAllCompleted}
                />
            </div>
        </main>
    );
}

export default App;

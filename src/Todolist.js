import React, { useState } from 'react';

function Todolist() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React' },
        { id: 2, text: 'Build a Todo App' },
        { id: 3, text: 'Profit' }
    ]);

    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTodo.trim()) return;
        setTodos([...todos, { id: todos.length + 1, text: newTodo }]);
        setNewTodo('');
    };

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add new todo"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;
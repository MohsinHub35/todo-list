import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([]); // No default task
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevtodos) => prevtodos.filter((prevtodos) => prevtodos.id !== id));
    };

    let upperCase = () => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            });
        });
    };

    // Mark task as done or undone
    let toggleDone = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: !todo.isDone, // Toggle isDone status
                    };
                }
                return todo;
            });
        });
    };

    return (
        <div>
            <h3>Todo List</h3>
            <input
                type="text"
                placeholder="Enter task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <br />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <hr />
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
                            {todo.task}
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => toggleDone(todo.id)}>
                            {todo.isDone ? "Undo" : "Mark Done"}
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={upperCase}>UpperCase all</button>
        </div>
    );
}

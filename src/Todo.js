import React from 'react';
import './style.css';

export default function Todo({ todo, toggleTodo }) {

    function handleTodoClick() {
        toggleTodo(todo.id);
    }

    return (
        <div className="checkBoxes">
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
                <div className='todoName'>
                    {todo.name}
                </div>
            </label>
        </div>
    )
}

import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter(){
    const {
        competedTodos, 
        totalTodos
    } = React.useContext(TodoContext);

    return (
        <h1 className="TodoCounter">
            Has completado <span>{competedTodos}</span> de <span>{totalTodos}</span> TODOs
        </h1>
    );
}

export { TodoCounter };
import React, { useState } from 'react';
import axios from 'axios';

const todo = props => {
    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState([]);

    const inputChangeHandler = (event) => {
        setTodoName(event.target.value);
    };

    const todoAddHandler = () => {
        setTodoList(todoList.concat(todoName));
        axios.post('https://hooks-a92ee.firebaseio.com/todos.json', {name: todoName})
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
    };

    return <React.Fragment>
        <input 
            type="text" 
            placeholder="Todo" 
            onChange={inputChangeHandler} 
            value={todoName} 
        />
        <button type="button" onClick={todoAddHandler}>Add</button>
        <ul>
            {todoList.map(todo =>(
                <li key={todo}>{todo}</li>
            ))}
        </ul>
    </React.Fragment>
};

export default todo;
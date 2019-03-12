import React, { useState, useEffect } from 'react';
import axios from 'axios';

const todo = props => {
    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        axios.get('https://hooks-a92ee.firebaseio.com/todos.json').then(result => {
            console.log(result);
            const todoData = result.data;
            const todos = [];
            for (const key in todoData){
                todos.push({id: key, name: todoData[key].name})
            }
            setTodoList(todos);
        });
    });

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
                <li key={todo.id}>{todo.name}</li>
            ))}
        </ul>
    </React.Fragment>
};

export default todo;
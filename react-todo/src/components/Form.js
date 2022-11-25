import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'  // npm i uuid

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    // Editing Todo list
    const updataeTodo = (title, id) => {
        const newTodo = todos.map((todo) => {
            return todo.id === id ? { title, id } : todo
        })
        setTodos(newTodo)
        setEditTodo("")
    }

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title)
        } else {
            setInput("")
        }
    }, [setInput, editTodo])


    const onInputChange = (event) => {
        setInput(event.target.value);
    }

    
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input /* completed: false */ }]);       
            setInput("");
        } else {
            updataeTodo(input, editTodo.id)
        }
    }

    return <>

        <form onSubmit={onFormSubmit}>
            <input type="text"
                placeholder='Enter a Todo...'
                className='task-input'
                value={input}
                required
                onChange={onInputChange} />

            <button className='button-add' type='submit'>
                {!editTodo ? "Add" : "OK"}
            </button>

        </form>
    </>
}

export default Form

import React from 'react'
import Task from './Task'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { ToDoContext } from './Context/toDoContext';
export default function NoCompleted() {

    const [addValue, setAddValue] = useState('');

    let { todos, setTodos } = useContext(ToDoContext)



    const todosJsx = todos.map((todo) => {

        if (!todo.isCompleted) {
            return <Task key={todo.id} todoObject={todo} />
        }

    })


    return (
        <div className='listTask'>
            {todosJsx}
            {/* <div className='addTask'>

                <input type="text"
                    value={addValue}
                    onChange={(e) => { setAddValue(e.target.value) }}
                    name="" id="" placeholder='عنوان المهمة ' />
                <button onClick={handleInputValue}>إضافة</button>
            </div> */}

        </div>
    )
}

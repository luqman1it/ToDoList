import React from 'react'
import Task from './Task'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { ToDoContext } from './Context/toDoContext';
import Swal from 'sweetalert2';
export default function ListTask() {

    const [addValue, setAddValue] = useState('');

    let { todos, setTodos } = useContext(ToDoContext)



    const todosJsx = todos.map((todo) => {
        return <Task key={todo.id} todoObject={todo} />
    })

    function handleInputValue() {
        if (addValue.trim() == '' || addValue == '') {
            Swal.fire({
                title: 'الرجاء إدخال عنوان للمهمة ',
                icon: 'error',
                confirmButtonText: 'حسناُ '
            })
        } else {
            let newToDo = {
                id: uuidv4(),
                title: addValue,
                details: '',
                isCompleted: false
            }
            setTodos([...todos, newToDo]);
            setAddValue('');
        }
    }
    return (
        <div className='listTask'>
            {todosJsx}
            <div className='addTask'>

                <input type="text"
                    value={addValue}
                    onChange={(e) => { setAddValue(e.target.value) }}
                    name="" id="" placeholder='عنوان المهمة ' />
                <button onClick={handleInputValue}>إضافة</button>
            </div>

        </div>
    )
}

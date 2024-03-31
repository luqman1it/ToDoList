import React, { useState } from 'react'
import { ToDoContext } from './Context/toDoContext'
import { useContext } from 'react'
import Swal from 'sweetalert2';

export default function Task({ todoObject }) {
    let { todos, setTodos } = useContext(ToDoContext);

    function handleCheckClick() {
        const updateToDos = todos.map((t) => {
            if (todoObject.id == t.id) {
                t.isCompleted = !t.isCompleted;
                if (t.isCompleted) {
                    Swal.fire({
                        text: 'تم إنجاز المهمة بنجاح ',
                        icon: 'success',
                        confirmButtonText: 'حسناً'
                    });

                }
            }
            return t;
        });
        setTodos(updateToDos);


    }
    function handleCheckdelete() {
        Swal.fire({
            title: 'هل تريد حذف المهمة',
            text: 'لا يمكنك التراجع بعد الحذف ',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: ' نعم، احذفه',
            cancelButtonText: 'لا، احتفظ به',
            confirmButtonColor: 'red'
        }).then((result) => {
            if (result.isConfirmed) {
                // User clicked the confirm button
                const deleteTask = todos.filter((e) => {
                    return todoObject.id != e.id;
                })
                setTodos(deleteTask);
                Swal.fire({
                    title: 'تم الحذف!',
                    text: 'تم حذف العنصر بنجاح',
                    icon: 'success',
                    confirmButtonText: ' حسناً',
                });

            }
        });

    }

    function handleCheckUpdate() {
        if (!todoObject.isCompleted) {
            Swal.fire({
                title: 'تعديل المهمة ',
                input: 'text',
                inputValue: todoObject.title,
                inputLabel: 'عنوان المهمة ',
                showCancelButton: true,
                confirmButtonText: 'حفظ',
                cancelButtonText: 'تجاهل',
                showLoaderOnConfirm: true,
                preConfirm: (value) => {
                    // يتم إرجاع القيمة المدخلة
                    return value;
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    // تم الضغط على زر التأكيد
                    if (result.value.trim() != '') {
                        // إذا تم إدخال قيمة، تقوم بعمل شيء ما مع هذه القيمة
                        todos.map((t) => {
                            const updateValue = todos.map((t) => {
                                if (t.id == todoObject.id)
                                    t.title = result.value;
                                return t;
                            });
                            setTodos(updateValue)
                        })

                    } else {
                        Swal.fire('إدخال خاطئ ', 'لا يمكنك إدخال قيمة فارغة ', 'error')
                    }
                }
            });
        } else {
            Swal.fire({
                title: 'لا يمكنك التعديل على مهمة منجزة ',
                icon: 'warning',
                confirmButtonText: 'حسناُ '
            })
        }
    }
    return (
        <div className='task'>
            <div className="text">
                <h3 style={{ textDecoration: todoObject.isCompleted ? 'line-through' : 'none' }}>{todoObject.title}</h3>
                <p>{todoObject.details}</p>
            </div>
            <div className="icons">
                <i onClick={handleCheckClick} className={todoObject.isCompleted ? "fa-solid fa-circle-check isCompleted" : "fa-solid fa-circle-check "}></i>
                <i onClick={handleCheckUpdate} className="fa-solid fa-pen"></i>
                <i onClick={handleCheckdelete} className="fa-solid fa-trash"></i>

            </div>
        </div>
    )
}

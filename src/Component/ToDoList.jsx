import React from 'react'
import './Style.css'
import NavBar from './NavBar.jsx'
import ListTask from './ListTask.jsx'
import { Route, Routes } from 'react-router-dom'
import Completed from './Completed.jsx'
import NoCompleted from './NoCompleted.jsx'
export default function ToDoList() {
    return (
        <div className='toDoList'>
            <h1>مهامي</h1>
            <NavBar />
            <Routes>
                <Route path='/' element={<ListTask />} />
                <Route path='/completed' element={<Completed />} />
                <Route path='/nocompleted' element={<NoCompleted />} />
            </Routes>
            {/* <ListTask /> */}

        </div>
    )
}

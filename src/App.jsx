import './App.css'
import ToDoList from './Component/ToDoList'
import { v4 as uuidv4 } from 'uuid';
import { ToDoContext } from './Component/Context/toDoContext'
import { useState } from 'react';
import { useEffect } from 'react';
// import { useContext } from 'react';
function App() {
  // Initial todos
  let initial = [
    { id: uuidv4(), title: 'قراءة 3 كتب', isCompleted: false },
    { id: uuidv4(), title: 'انهاء كورس JavaScript', isCompleted: false },
    { id: uuidv4(), title: 'تعلم اللغة الانجليزية', isCompleted: false },
    { id: uuidv4(), title: 'تعلم Hooks in React', isCompleted: false },
    { id: uuidv4(), title: 'التسجيل في نادي رياضي ', isCompleted: false },
  ];

  // Get todos from localStorage or use initial todos if not available
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : initial;
  });

  // Update localStorage when todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoContext.Provider value={{ todos, setTodos }}>
      <div className="app" >
        <ToDoList />
      </div>
    </ToDoContext.Provider>
  )
}

export default App

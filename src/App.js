import './App.css';
import Form from './Form';
import Todo from './Todo';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'))

    if (storedTasks) setTasks(storedTasks)
  }, [])

  useEffect(() => {
    if(tasks.length === 0) return;
    
    localStorage.setItem('tasks', JSON.stringify(tasks));

  },[tasks])

  function addTask(name){
   if(name) setTasks(prevTasks => {
      return [...prevTasks, {name:name, done:false}]

    })

  }

  function removeTask(remTaskIndex){

    
    setTasks(prev => {
      return prev.filter((taskObject, index) => index !== remTaskIndex)

    })

  }

  function updateTask(taskIndex, newDone){
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    })

  }

  
  function editTask(taskIndex, newName){
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].name = newName;
      return newTasks;
    })

  }

  const completedTasks = tasks.filter(task => task.done).length

  const allTasks = tasks.length

  function clearComplete(){
    const newTasks = tasks.filter(task => !task.done);
    setTasks(newTasks);
  }

  return (
    <>
      <div className='main'>
        <h1>My Todo App</h1>
        Completed {completedTasks} of {allTasks}
        <button onClick={clearComplete}>Clear Complete</button>
        <Form  onAdd={addTask} />
        {tasks.map((task, index) => (
          <Todo {...task} 
          onToggle={done => updateTask(index, done)}
          onDelete={() => removeTask(index)}
          onEdit={newName => editTask(index, newName)}
         />
        ))}
      </div>
      
    </>
  );
}

export default App;

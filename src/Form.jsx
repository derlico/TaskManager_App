import React, { useState } from 'react'

export default function Form({onAdd}) {
    
    const [taskName, setTaskName] = useState([]);

    function handleSubmit(ev){
        ev.preventDefault();
        onAdd(taskName);
        setTaskName('');
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          
          <input 
          type='text' 
          value={taskName}
          onChange={ev => setTaskName(ev.target.value)}
          placeholder='New Task' />
          <button>Add</button>
        </form>
    </div>
  )
}

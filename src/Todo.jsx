import React from 'react'

export default function Todo({name, done, onToggle, onDelete, onEdit}) {
    function handleClick(){
        onToggle(!done);
    }

    

  return (
    <div className={'task ' + (done?'done': '')}>
        
        <form onSubmit={ev => {ev.preventDefault(); }}>
            <input type='checkbox' checked={done} onChange={handleClick}/>
            <span> <input type='text' onChange={ev => onEdit(ev.target.value)} value={name}/></span>
            <button onClick={onDelete}>&#10006;</button>
        </form>
        
        
    </div>
  )
}

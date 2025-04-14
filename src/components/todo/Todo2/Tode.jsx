import React, { useState } from 'react';
import './Todo2.css';

function Tode() {
  const [tasks, setTasks] = useState(["Eat Breakfast", "Task 2", "Task No::: 03"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(prevTasks => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className='todo-container'>
      <h1>To-do List</h1>

      <div className='input-section'>
        <input
          type="text"
          placeholder='Enter a Task ...'
          value={newTask}
          onChange={handleInputChange}
        />
        <button className='add-button' onClick={addTask}>Add</button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='text'>{task}</span>
            <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
            <button className='move-button' onClick={() => moveTaskUp(index)}>Up</button>
            <button className='down-button' onClick={() => moveTaskDown(index)}>Down</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Tode;

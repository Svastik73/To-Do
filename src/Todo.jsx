import React, { useState } from "react";
import "./App.css";
function Todo() {
  const [tasks, setTask] = useState(["Make Notes", "Complete backend task of chat app"]);
  const [newTask, setNew] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editedTask, setEditedTask] = useState("");


  function handleInputChange(event) {
    let stll=event.target.value; 
    setNew(stll);
  }
  function handleEditChange(event) {
    setEditedTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim()) {
      setTask(t => [...t, newTask]);
      setNew("");
    }
  }
  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTask(updatedTask);
  }
  function moveTaskDown(index) {
    const siz = tasks.length;
    if (index !== siz - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
      setTask(updatedTask);
    }
  }
  function moveTaskUp(index) {
    if (index !== 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
      setTask(updatedTask);
    }
  }
  function startEditing(index) {
    setIsEditing(index);
    setEditedTask(tasks[index]);
  }
  function submitEdit(index) {
    if (editedTask.trim()) {
      const updatedTask = [...tasks];
      updatedTask[index] = editedTask;
      setTask(updatedTask);
      setIsEditing(null);
      setEditedTask("");
    }
  }
  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {isEditing === index ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={handleEditChange}
                />
                <button className="subchange" onClick={() => submitEdit(index)}>Submit</button>
                <button className="cancel" onClick={() => setIsEditing(null)}>Cancel</button>
              </>
            ) : (
              <> 
                <span className="text">{task}</span>
                <button className="rename" onClick={() => startEditing(index)}>📝</button>
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>👆🏻</button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
export default Todo;

import React,{useState} from "react";
import "./App.css";
function Todo(){
 const [tasks,setTask]=useState(["Make Notes","Complete backend task of chat app"]);
 const [newTask,setNew]=useState("");
 function handleInputChange(event){
      setNew(event.target.value);
 }
 function addTask(){
    if(newTask.trim()){
   setTask(t => [...t,newTask]);
   setNew("");
    }
 }
 function deleteTask(index){
    const updateTask=tasks.filter((_,i) => i !==index );//keep only those lement that dont have index
    setTask(updateTask);
  }
 function moveTaskDown(index){
  const siz=tasks.length;
  if(index!=siz-1){
    const updateTask=[...tasks];
    [updateTask[index],updateTask[index+1]]=[updateTask[index+1],updateTask[index]];
    setTask(updateTask);
  }
  else{
    
  }
 }
 function moveTaskUp(index){
   
     if(index!=0){
       const updateTask=[...tasks];
       [updateTask[index],updateTask[index-1]]=[updateTask[index-1],updateTask[index]];
       setTask(updateTask);
     }
 }
 return(
    <div className="to-do-list">
        <h1 >
            To Do List
        </h1>
        <div>
            <input type="text"  placeholder="Enter a task..." value={newTask}  onChange={handleInputChange}>
            </input>
            <button className="add-button" onClick={addTask} >Add</button>
        </div>
        <ol>
            {tasks.map((task,index) => 
              <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                <button className="move-button" onClick={()=>moveTaskUp(index)}> 👆🏻 </button>
                <button className="move-button" onClick={()=>moveTaskDown(index)}> 👇 </button>   
              </li>)
            }
        </ol>
    </div>
 );

}
export default Todo;
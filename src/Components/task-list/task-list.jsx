import React, { useState } from 'react';
import SingleTask from '../single-task/single-task';
import styles from './task-list.module.css'
import Edit from '../Actions/edit/edit';
import Add from '../Actions/add/add';

const TaskList = () => {
    const [TASKS,setTasks] = useState([
        {id:1,taskNumber: 1, taskName: "Task One", taskDescription: "This is the describition for the first task",status:"In Progress"},
        {id:2,taskNumber: 2, taskName: "Task Two", taskDescription: "This is the describition for the Second task",status:"Not Started"},
        {id:3,taskNumber: 3, taskName: "Task Three", taskDescription: "This is the describition for the Third task",status:"Finshed"},
        {id:4,taskNumber: 4, taskName: "Task Four", taskDescription: "This is the describition for the Fourth task",status:"In Progress"}
    ])

    const [updatedTask, setUpdatedTask] = useState(null)
    const [isEditedClicked, setIsEditedClicked] = useState(false)


    const [editedTaskId, setEditedTaskId] = useState(null)
    const [isAddClicked, setIsAddClicked] = useState(false)

    function deletedTask(id) {
            const updatedTasks = TASKS.filter((task) => task.id !== id);
            setTasks(updatedTasks);
    }

    function gettinigEditedTask(id){
        const editedTask = TASKS.filter((task) => task.id === id);
        setIsEditedClicked(true)
        setEditedTaskId(id)
        setUpdatedTask(editedTask)
    }

    function updatingTask(data) {
        setIsEditedClicked(false)
        const updatedTasks = TASKS.map((task) => {
            console.log(task.id)
          if (+task.id === +editedTaskId) {
            return {
              taskNumber: data.taskNumber,
              taskName: data.taskName,
              taskDescription: data.taskDescription,
              status: data.status
            };
          }
          return task;
        });
        console.log(updatedTasks)
        setTasks(updatedTasks)
      }

     function onAddingTask(data) {
        const updatedTasks = TASKS.push({id:TASKS.length,...data})
        
        setUpdatedTask(updatedTasks)
     }

     function closingAddWindow(value){
        setIsAddClicked(value)

     }

    return (
        <>
        <button onClick={() => setIsAddClicked(true)}>Add</button>
        {isAddClicked && <Add onAddingTask={onAddingTask} closingAdd={closingAddWindow}/>}
        <div className={styles.list}>
            {TASKS.map(task => <SingleTask 
            taskId={task.id} 
            taskNumber={task.taskNumber}
            taskName={task.taskName} 
            taskDesc={task.taskDescription} 
            taskStatus={task.status}
            deletedTask={deletedTask} 
            editedTask={gettinigEditedTask}
            />)}
        </div>
        {isEditedClicked && <Edit editedTask={updatedTask} isEditedClicked={isEditedClicked} onUpdateTask={updatingTask}/>} 
        </>
    );
}

export default TaskList;

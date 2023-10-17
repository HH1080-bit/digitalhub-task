import React from 'react';
import styles from './single-task.module.css'
import {AiOutlineEdit} from 'react-icons/ai'
import {RiDeleteBin2Line} from 'react-icons/ri'
const SingleTask = ({taskId,taskNumber,taskName,taskDesc,taskStatus,deletedTask,editedTask}) => {
    let isPending = taskStatus === 'In Progress';
    let isFinshed = taskStatus === 'Finshed';

    return (
        <div className={`${styles.single} ${isPending ? styles.pending : isFinshed ? styles.finshed : styles.notstarted }`}>
            
            <div>
                <h4>Task Number</h4>                
                <span>{taskNumber}</span>
            </div>
            <div>
                <h4>Task Name</h4>
            <p>{taskName}</p>
            </div>
            <div>
                <h4>Describtion</h4>
            <p>{taskDesc}</p>
            </div>
            <div>
                <h4>Status</h4>
            <span >{taskStatus}</span>
            </div>
            <div>
            <h4>Edit</h4>
            <AiOutlineEdit className={styles.icon} onClick={() => editedTask(taskId)}/>
            </div>

            <div>
                <h4>Delete</h4>
                <RiDeleteBin2Line className={styles.icon} onClick={() => deletedTask(taskId)}/>
            </div>
          
        </div>
    );
}

export default SingleTask;

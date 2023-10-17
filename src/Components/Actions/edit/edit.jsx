import React, { useState } from 'react';
import styles from './edit.module.css'

const Edit = ({ editedTask, isEditedClicked, onUpdateTask }) => {
  const [formData, setFormData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateTask(formData);
  };

  return (
    <div className={styles.edit}>
        <button>Close</button>
      {editedTask.map((task) => {
        return (
          <div key={task.id}>
            <form onSubmit={handleSubmit}>
            <h3>Editing Task Number {task.id}</h3>
              <div>
                <label>Task Number</label>
                <input
                  type="number"
                  name="taskNumber"
                  value={formData.taskNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Task Name</label>
                <input
                  type="text"
                  name="taskName"
                  value={formData.taskName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Task Description</label>
                <input
                  type="text"
                  name="taskDescription"
                  value={formData.taskDescription}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Status</label>
                <div className={styles.checkboxes}>
                    <div>
                    <input
                    type="radio"
                    checked={formData.status === 'Not Started'}
                    name="status"
                    value="Not Started"
                    onChange={handleInputChange}
                  />
                  <label>Not Started</label>
                    </div>
                  <div>
                  <input
                    type="radio"
                    checked={formData.status === 'In Progress'}
                    name="status"
                    value="In Progress"
                    onChange={handleInputChange}
                  />
                   <label>In Progress</label>
                  </div>
                  <div>
                  <input
                    type="radio"
                    checked={formData.status === 'Finshed'}
                    name="status"
                    value="Finshed"
                    onChange={handleInputChange}
                  />
                    <label>Finished</label>
                  </div>
                </div>
              </div>
              <button type="submit" className={styles.editbtn}>Edit</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Edit;

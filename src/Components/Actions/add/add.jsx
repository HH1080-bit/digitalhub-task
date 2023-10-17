import React, { useState } from 'react';
import styles from './add.module.css'

const Add = ({onAddingTask,isAddClicked,closingAdd}) => {

    const [formData, setFormData] = useState([]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        onAddingTask(formData);
        closingAdd(false)
      };
    return (
        <div className={styles.add}>
<form onSubmit={handleSubmit}>
    <button className={styles.close}  onClick={() => closingAdd(false)}>Close</button>
    <h3>Adding New Task</h3>
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
                  value={formData.taskDescription}
                  name="taskDescription"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Status</label>
                <div className={styles.checkboxes}>
                <div>
                  <input
                    type="radio"
                    name="status"
                    value="Not Started"
                    onChange={handleInputChange}
                  />
                  <label>Not Started</label>
                  </div>
                  <div>
                  <input
                    type="radio"
                    name="status"
                    value="In Progress"
                    onChange={handleInputChange}
                  />
                  <label>In Progress</label>
                  </div>
                  <div>
                  <input
                    type="radio"
                    name="status"
                    value="Finshed"
                    onChange={handleInputChange}
                  />
                  <label>Finished</label>
                  </div>
                </div>
    
                <div>
                </div>
              </div>
              <button className={styles.addbtn}  type="submit">Add</button>
            </form>
        </div>
    );
}

export default Add;

import React, { useState } from 'react';
import './style.css';
function Todo(props) {
  const [isToogleList, setToogleList] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskList, setTaskList] = useState(['Get a new laptop', 'Go to shopping', 'Read a newspaper', 'Go to college', 'Buy a new phone']);
  function addToList() {
    if (taskName === '') return;
    console.log('TaskName', taskName);
    //Add Here
    let newTaskList = [...taskList];
    newTaskList.push(taskName);
    setTaskList(newTaskList);
    setTaskName('');
  }

  function removeItem(itemIndex) {
    if (itemIndex < 0 || itemIndex > taskList.length - 1) return;
    console.log('remove', itemIndex)
    let newTaskList = [...taskList];
    newTaskList.splice(itemIndex, 1);
    setTaskList(newTaskList)
  }

  return (
    <div className="center">
      <div className="button">
        <span className="text">To-Do List</span>
        <span className="icon" onClick={() => setToogleList(!isToogleList)}>
          <i className="fas fa-sort-down" />
        </span>
      </div>
      <div className={`${isToogleList ? 'field hide' : 'field'}  `}>
        <input
          value={taskName}
          type="text" required placeholder="Add your new to-do list"
          onChange={(e) => {
            console.log(e.target.value)
            setTaskName(e.target.value)
          }} />
        <span className="add-btn" onClick={() => addToList()}>ADD</span>
      </div>
      <ul>
        {
          taskList.map((value, index) => {
            return (
              <li id={index}><span onClick={() => removeItem(index)}><i className="fa fa-trash" /></span>{value}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Todo;

import './style.css';
import {
  renderList, addToList, editTask, removeTask,
} from './modules/add&remove.js';
import {
  checkedBox, removeCompletedTasks,
} from './modules/statusUpdate.js';

const taskContainer = document.getElementById('tasksList');
const newTask = document.getElementById('taskInput');
const submitTask = document.getElementById('submitTask');

/* Add To List */
newTask.addEventListener('keypress', (e) => {
  addToList(e);
});

/* Add to List (clicked) */
submitTask.addEventListener('click', () => {
  addToList('clicked');
});

/* Edit Task */
taskContainer.addEventListener('keypress', (event) => {
  const taskToEdit = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  const index = li.id;
  if (taskToEdit === 'taskEdit') {
    editTask(index, event);
  }
});

/* Delete Task */
taskContainer.addEventListener('click', (event) => {
  const clickedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (clickedItem === 'deleteTask') {
    removeTask(li.index);
    event.target.parentElement.remove();
  }
  if (clickedItem === 'checked') {
    checkedBox({ index: li.id, status: false });
  }
  if (clickedItem === 'unchecked') {
    checkedBox({ index: li.id, status: true });
  }
});

/* Delete completed tasks */
const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', () => {
  removeCompletedTasks();
});

document.addEventListener('DOMContentLoaded', renderList());
import './style.css';
import {
  renderList, addToList, editTask, removeTask,
} from './modules/add&remove.js';

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

/* Delete Task */
taskContainer.addEventListener('click', (event) => {
  const clickedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (clickedItem === 'deleteTask') {
    removeTask(li.index);
    event.target.parentElement.remove();
  }
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

document.addEventListener('DOMContentLoaded', renderList());
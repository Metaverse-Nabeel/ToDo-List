import './style.css';
import tasksToDo from './tasksArray.js';

const taskContainer = document.getElementById('tasksList');

const displayTasks = () => {
  tasksToDo.forEach((task) => {
    const taskCard = document.createElement('div');
    taskCard.classList = 'tasksContent';
    taskCard.innerHTML = `<div class="taskText">
                            <input type="checkbox">
                            <p class="taskText">${task.description}</p>
                          </div>
                          <i class="fa-solid fa-trash-can" id="deleteTask"></i>`;
    taskContainer.appendChild(taskCard);
  });
};

displayTasks();
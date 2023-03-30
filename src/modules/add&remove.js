let tasksToDo = JSON.parse(localStorage.getItem('tasksToDo')) || [];

const taskList = document.getElementById('tasksList');

/* Rendering Task List */
const renderList = () => {
  taskList.innerHTML = '';
  tasksToDo.forEach((task) => {
    const taskCard = document.createElement('div');
    taskCard.classList = 'tasksContent';
    taskCard.index = `${task.index}`;
    taskCard.innerHTML = `<div class="taskText" id='${task.index}'>
                          <input id='checkboxBtn' type="checkbox"></input>
                            <input id="desc" class="${task.completed === true ? 'taskDone' : 'taskEdit'}"
                              type="text" value="${task.description}">
                            </input>
                          </div>
                          <i class="fa-solid fa-trash-can deleteTask" id="deleteTask"></i>`;
    const desc = document.getElementById('desc');
    if (task.completed === true) {
      desc.classList.add('taskDone');
    }
    taskList.appendChild(taskCard);
  });
};

/* Add To List */
const newTask = document.getElementById('taskInput');
const addToList = (e) => {
  if (newTask.value === '') return;
  if (e.key === 'Enter' || e === 'clicked') {
    const taskItem = {
      description: newTask.value,
      completed: false,
      index: tasksToDo.length + 1,
    };
    newTask.value = '';
    tasksToDo = [...tasksToDo, taskItem];
    localStorage.setItem('tasksToDo', JSON.stringify(tasksToDo));
    renderList();
  }
};

/* Edit Task */
const editTask = (index, event) => {
  if (event.target.value === '') return;
  if (event.key === 'Enter') {
    tasksToDo[index - 1].description = event.target.value;
    localStorage.setItem('tasksToDo', JSON.stringify(tasksToDo));
  }
};

/* Remove Task */
const removeTask = (targetIndex) => {
  const listFiltered = tasksToDo.filter((item) => +item.index !== +targetIndex);
  const newList = listFiltered.map((item, index) => ({
    description: item.description,
    completed: item.completed,
    index: index + 1,
  }));
  tasksToDo = newList;
  localStorage.setItem('tasksToDo', JSON.stringify(newList));
  renderList();
};

export {
  renderList, addToList, editTask, removeTask,
};
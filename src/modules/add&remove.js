/* Rendering Task List */
const renderList = () => {
  const tasksToDo = JSON.parse(localStorage.getItem('tasksToDo')) || [];
  const taskList = document.getElementById('tasksList');
  taskList.innerHTML = '';
  tasksToDo.forEach((task) => {
    const taskCard = document.createElement('div');
    taskCard.classList = 'tasksContent';
    taskCard.index = `${task.index}`;
    taskCard.innerHTML = `<div class="taskText" id="${task.index}"> 
                            ${task.completed === true ? `
                            <input type="checkbox" id="checkbox" class="checked" checked></input>` : '<input type="checkbox" id="checkbox" class="unchecked"></input>'}
                            <input class="${task.completed === true ? 'taskDone taskEdit' : 'taskEdit'}"
                              type="text" value="${task.description}">
                            </input>
                          </div>
                          <i class="fa-solid fa-trash-can deleteTask" id="deleteTask"></i>`;
    taskList.appendChild(taskCard);
  });
};

/* Add To List */
const newTask = document.getElementById('taskInput');
const addToList = (e) => {
  let tasksToDo = JSON.parse(localStorage.getItem('tasksToDo'));
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
const editTask = ({ index, event }) => {
  const tasksToDo = JSON.parse(localStorage.getItem('tasksToDo'));
  if (event.target.value === '') return;
  if (event.key === 'Enter') {
    tasksToDo[index - 1].description = event.target.value;
    localStorage.setItem('tasksToDo', JSON.stringify(tasksToDo));
  }
};

/* Remove Task */
const removeTask = (targetIndex) => {
  let tasksToDo = JSON.parse(localStorage.getItem('tasksToDo'));
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

// /* Update Uncompleted Tasks */
// const updateUncompleted = (data) => {
//   tasksToDo = data;
//   renderList();
// };

export {
  renderList, addToList, editTask, removeTask,
};
import { tasksToDo, renderList, updateUncompleted } from './add&remove.js';

const checkedBox = ({ index, status }) => {
  tasksToDo[index - 1].completed = status;
  localStorage.setItem('tasksToDo', JSON.stringify(tasksToDo));
  renderList();
};

const removeCompletedTasks = () => {
  const uncompletedTodos = tasksToDo.filter((element) => element.completed !== true);
  const newTodos = uncompletedTodos.map((element, index) => {
    element.index = index + 1;
    return element;
  });
  localStorage.setItem('tasksToDo', JSON.stringify(newTodos));
  updateUncompleted(newTodos);
};

export { checkedBox, removeCompletedTasks };
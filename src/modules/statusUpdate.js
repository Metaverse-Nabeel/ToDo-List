import { renderList } from './add&remove.js';

const checkedBox = ({ index, status }) => {
  const list = JSON.parse(localStorage.getItem('tasksToDo'));
  list[index - 1].completed = status;
  localStorage.setItem('tasksToDo', JSON.stringify(list));
  renderList();
};

const removeCompletedTasks = () => {
  const tasksToDo = JSON.parse(localStorage.getItem('tasksToDo'));
  const uncompletedTodos = tasksToDo.filter((element) => element.completed !== true);
  const newTodos = uncompletedTodos.map((element, index) => {
    element.index = index + 1;
    return element;
  });
  localStorage.setItem('tasksToDo', JSON.stringify(newTodos));
  renderList();
  // updateUncompleted(newTodos);
};

export { checkedBox, removeCompletedTasks };
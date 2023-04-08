/**
 * @jest-environment jsdom
 */

import { editTask } from '../src/modules/add&remove.js';
import { checkedBox } from '../src/modules/statusUpdate.js';

jest.mock('../__mock__/taskTest');

const mockTask = [
  {
    index: 1,
    description: 'test1',
    completed: false,
  },
  {
    index: 2,
    description: 'test2',
    completed: false,
  },
  {
    index: 3,
    description: 'test3',
    completed: false,
  },
];

describe('Edit Task Description', () => {
  /* Arrange */
  test('Edit Task', () => {
    const inputTask = {
      index: 2,
      event: {
        key: 'Enter',
        target: {
          value: 'New Edited Task',
        },
      },
    };
    localStorage.setItem('tasksToDo', JSON.stringify(mockTask));

    /* Act */
    editTask(inputTask);

    const editedTask = JSON.parse(localStorage.getItem('tasksToDo'));

    /* Assert */
    expect(editedTask[inputTask.index - 1].description).toBe('New Edited Task');
  });
});

describe('Completed Task', () => {
  test('Status update', () => {
    /* Arrange */
    const statusUpdate = {
      index: 1,
      status: true,
    };
    document.body.innerHTML = '<div id="tasksList"></div>';
    localStorage.setItem('tasksToDo', JSON.stringify(mockTask));

    /* Act */
    checkedBox(statusUpdate);
    const newTaskList = JSON.parse(localStorage.getItem('tasksToDo'));

    /* Assert */
    expect(newTaskList[statusUpdate.index - 1].completed).toBeTruthy();
  });

  // Paste your here... and don't forget to import removeCompletedTasks
});
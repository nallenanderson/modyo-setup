import { UPDATE_TASKS, ADD_REPLIES } from './types';

export function updateTasks(taskUpdated){
  return {
    type: UPDATE_TASKS,
    payload: taskUpdated
  }
};

export function addReplies(reply){
  return {
    type: ADD_REPLIES,
    payload: reply
  }
};

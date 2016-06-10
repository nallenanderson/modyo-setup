import { UPDATE_TASKS, FETCH_TASKS } from './types';

export function updateTasks(taskUpdated){
  return {
    type: UPDATE_TASKS,
    payload: taskUpdated
  }
}

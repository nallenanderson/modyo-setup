import { UPDATE_TASKS, ADD_REPLIES, ADD_TAGS, DELETE_TAGS, ADD_ACTIVITY } from './types';

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

export function addTags(tags){
  return {
    type: ADD_TAGS,
    payload: tags
  }
}

export function deleteTags(tags){
  return {
    type: DELETE_TAGS,
    payload: tags
  }
}

export function addActivity(activities){
  return {
    type: ADD_ACTIVITY,
    payload: activities
  }
}

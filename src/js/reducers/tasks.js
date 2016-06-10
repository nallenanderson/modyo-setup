import { UPDATE_TASKS, FETCH_TASKS } from '../actions/types';

import { taskData } from '../data';

export default function(state = taskData, action){
  switch(action.type){
    case UPDATE_TASKS:
      console.log(action.payload);
      return action.payload;
  }
  return state;
}

import { ADD_ACTIVITY } from '../actions/types';

import { activities } from '../data';

export default function(state = activities, action){
  switch(action.type){
    case ADD_ACTIVITY:
      return action.payload;
  }
  return state;
}

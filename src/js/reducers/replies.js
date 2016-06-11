import { ADD_REPLIES } from '../actions/types';

export default function(state = [], action){
  switch(action.type){
    case ADD_REPLIES:
      return action.payload;
  }
  return state;
}

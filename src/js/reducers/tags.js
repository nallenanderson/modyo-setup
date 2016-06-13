import { ADD_TAGS, DELETE_TAGS } from '../actions/types';

import { tagData } from '../data';

export default function(state = tagData, action){
  switch(action.type){
    case ADD_TAGS:
      return action.payload;
    case DELETE_TAGS:
      return action.payload;
  }
  return state;
}

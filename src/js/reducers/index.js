import { combineReducers } from 'redux';
import tasksReducer from './tasks';
import repliesReducer from './replies';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  replies: repliesReducer
});

export default rootReducer;

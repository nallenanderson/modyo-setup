import { combineReducers } from 'redux';
import tasks from './tasks';
import replies from './replies';
import tags from './tags';
import activities from './activities';

const rootReducer = combineReducers({ tasks, replies, tags, activities });

export default rootReducer;

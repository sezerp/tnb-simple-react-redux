import { combineReducers } from 'redux';

import DescribeReducer from './reducer_describe';

const rootReducer = combineReducers({
  sobjects: DescribeReducer
});

export default rootReducer;

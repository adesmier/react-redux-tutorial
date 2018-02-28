import { combineReducers } from 'redux';
import articleReducer from './article';
import usersReducer from './users';

const rootReducer = combineReducers({
    users: usersReducer,
    articles: articleReducer
});

export default rootReducer;

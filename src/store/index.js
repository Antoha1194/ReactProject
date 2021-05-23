import { createStore, combineReducers } from 'redux';
import { chatsReducer } from './chats/reducer';
import { messagesReducer } from  './messages/reducer';
import { profileReducer } from './profile/reducer';

const roorReducer = combineReducers({
    messages: messagesReducer,
    chats: chatsReducer,
    profile: profileReducer
})

export const store = createStore(roorReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
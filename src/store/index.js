import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import { chatsReducer } from './chats/reducer';
import { messagesReducer } from  './messages/reducer';
import { profileReducer } from './profile/reducer';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'messagerGB',
    storage,
  }

const rootReducer = combineReducers({
    messages: messagesReducer,
    chats: chatsReducer,
    profile: profileReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = createStore(roorReducer, compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__  ?  window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
//   ));
  export default () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)
    return { store, persistor }
  }  
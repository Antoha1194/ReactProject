import { useParams } from 'react-router-dom';
import {AUTHOR} from '../../const';
import { chatAddMessage, chatSignalMessage } from '../chats/actions';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (text, author) => ({
    type: ADD_MESSAGE,
    text,
    author
})
export const addMessageWithThunk = (text, author, chatId) => (dispatch, getState) => {
        dispatch(addMessage(text, author));
        dispatch(chatAddMessage(chatId, Object.keys(getState().messages).length));
        if(author !== AUTHOR.BOT ){
            setTimeout(() => {
                dispatch(addMessage("I am BOT", AUTHOR.BOT));
                dispatch(chatAddMessage(chatId, Object.keys(getState().messages).length));
                dispatch(chatSignalMessage(chatId));
                setTimeout(() => dispatch(chatSignalMessage(chatId)), 1000);
            }, 1000);
        }  
      
    };
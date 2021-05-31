import { ADD_MESSAGE } from './actions';
import { AUTHOR } from '../../const';

const initialState = {
    1: {
        author: AUTHOR.BOT,
        text: 'Привет'
    },
    2: {
        author: AUTHOR.BOT,
        text: 'Как дела?'
    }
}

export const messagesReducer = (state = initialState, action) => {

    switch(action.type){
       

        case ADD_MESSAGE:{
            const newMessageId = Object.keys(state).length + 1;

            return {
                ...state,
                [newMessageId]:{
                    author: action.author,
                    text: action.text
                }
            }
        }
        default:{
            return state
        }

    }

}
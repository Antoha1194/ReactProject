import { ADD_CHAT, ADD_MESSAGE } from './actions'

const initialState = {
 
    1:{
        name: 'Chat #1',
        messages: [1,2]
    },
    2:{
        name: 'Chat #2',
        messages: [2]
    },
    3:{
        name: 'Chat #3',
        messages:[]
    }
    
}

export const chatsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CHAT: {
            const newChatId = Object.keys(state).length + 1;
            return {
                ...state,
                [newChatId]: {
                    name: `Chat #${newChatId}`,
                    messages: []
                }
            }
        }
        case ADD_MESSAGE: {
            return {
                ...state,
                [action.activeChat]: {
                    ...state[action.activeChat],
                    messages: [...state[action.activeChat].messages, action.messageID]
                }
            }
        }
        default:
            return state
    }
}
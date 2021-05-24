import { ADD_CHAT, ADD_MESSAGE, NEW_MESSAGE, DROP_CHAT } from './actions'

const initialState = {
 
    1:{
        name: 'Chat #1',
        newMessage: false,
        messages: [1,2]
    },
    2:{
        name: 'Chat #2',
        newMessage: false,
        messages: [2]
    },
    3:{
        name: 'Chat #3',
        newMessage: false,
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
                    newMessage: false,
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
        case NEW_MESSAGE: {
            return {
                ...state,
                [action.chatId]: {
                    ...state[action.chatId],
                    newMessage: !state[action.chatId].newMessage
                }
            }
        }
        default:
            return state
    }
}
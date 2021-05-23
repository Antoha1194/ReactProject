export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (text, author) => ({
    type: ADD_MESSAGE,
    text,
    author
})
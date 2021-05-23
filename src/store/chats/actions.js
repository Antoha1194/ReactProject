export const ADD_CHAT = 'CHAT::ADD_CHAT';
export const ADD_MESSAGE = "CHAT::ADD_MESSAGE";

export const chatAdd = {
     type: ADD_CHAT
 }

export const chatAddMessage = (activeChat, messageID) => ({
    type: ADD_MESSAGE,
    activeChat,
    messageID
})

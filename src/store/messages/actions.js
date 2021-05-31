import { useParams } from 'react-router-dom';
import {AUTHOR} from '../../const';
import { chatAddMessage, chatSignalMessage } from '../chats/actions';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (text, author) => ({
    type: ADD_MESSAGE,
    text,
    author
})
// export const fechMessage = (message, ) => {
//         let xml = `<chat application='7478065272013953235' instance='165'><message>${message}</message></chat>`;
//         fetch("https://www.botlibre.com/rest/api/chat", {
//             method: "POST",
//             headers: {
//                 "Content-Type": 'application/xml'
//             },
//             body: xml

//         })
//     }
export const addMessageWithThunk = (text, author, chatId) => (dispatch, getState) => {
    const parser = new DOMParser()
        dispatch(addMessage(text, author));
        dispatch(chatAddMessage(chatId, Object.keys(getState().messages).length));
        if(author !== AUTHOR.BOT ){
            let xml = `<chat application='7188180525264576194' instance='38850303'><message>${text}</message></chat>`;
            fetch("https://www.botlibre.com/rest/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": 'application/xml'
                },
                body: xml

            }).then(res => res.text()).then(res => {
                const xml  = parser.parseFromString(res, "application/xml");
                const domElnameMessage = xml.getElementsByTagName('message')[0];
                dispatch(addMessage(domElnameMessage.textContent, AUTHOR.BOT));
                dispatch(chatAddMessage(chatId, Object.keys(getState().messages).length));
                dispatch(chatSignalMessage(chatId));
                setTimeout(() => dispatch(chatSignalMessage(chatId)), 1000);
            }).catch(err => console.log("err", err));
        }  
    };
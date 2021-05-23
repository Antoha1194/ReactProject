import React, { useEffect, useState } from 'react';
import Message from './Message.jsx';
import SendMessage from './SendMessage.jsx';
import {AUTHOR} from '../const';
import { useSelector, useDispatch } from 'react-redux';
import { chatAddMessage } from '../store/chats/actions'
import { addMessage as storeAddMessage } from '../store/messages/actions'


export default function MessageField(props){
    const chats = useSelector(state => state.chats);
    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();

   
    const addMessage = (id) => {
        
        dispatch(chatAddMessage(props.chatId, id))
        // setMessages(
        //     {
        //         ...messages,
        //         [newMessageId]: {author, text}
        //     }
        // );
        // setChats(
        //     {
        //         ...chats, 
        //         [props.chatId]: {
        //             messages: [...messageActiveChat, newMessageId] 
        //         }
        //     }
        // )
    };  

    useEffect(() => {
        let lastMessage = messages[Object.keys(messages).length];
         if (lastMessage.author == AUTHOR.HUMAN) {
                console.log(lastMessage);
            setTimeout(() => {
                dispatch(storeAddMessage('I am Bot', AUTHOR.BOT));
                addMessage(Object.keys(messages).length +1);
            }, 1000);   
             
        }
    })


    return <div className={`message-field ${props.sizeCol}`}>
                <div className="messages">
                    {chats[props.chatId].messages.map(item =>  <Message key={item} message={messages[item]}/> )}
                
                </div>
                <SendMessage addMessage={addMessage} />    
            </div>;

}


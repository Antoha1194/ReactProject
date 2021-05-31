import React, { useEffect, useState } from 'react';
import Message from './Message.jsx';
import SendMessage from './SendMessage.jsx';
import {AUTHOR} from '../const';
import { useSelector, useDispatch } from 'react-redux';
import { addMessageWithThunk } from '../store/messages/actions'


export default function MessageField(props){
    const chats = useSelector(state => state.chats);
    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();

    const getInput = (value) => dispatch(addMessageWithThunk(value, AUTHOR.HUMAN, props.chatId));
   


    return <div className={`message-field ${props.sizeCol}`}>
                <div className="messages">
                    {chats[props.chatId].messages.map(item =>  <Message key={item} message={messages[item]}/> )}
                
                </div>
                <SendMessage addMessage={getInput} />    
            </div>;

}


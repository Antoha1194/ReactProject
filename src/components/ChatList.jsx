import React, { useEffect } from 'react';
import { Button, ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { chatAdd, chatDrop } from '../store/chats/actions';


export default function ChatList(props){
    const chats = useSelector(state => state.chats);
    const dispatch = useDispatch();

    const addChat = (e) => {
        dispatch(chatAdd);
    }



    const togleClassActive = (flag) => flag? 'blick': '';
   
    return <section className={`section-left ${props.sizeCol}`}>
                <ListGroup className='chat-list'>
                    {
                        Object.entries(chats).map(([key,item]) => (
                             <Link to={`/chat/${key}`}>
                                <ListGroup.Item className={`chat-list__item ${togleClassActive(item.newMessage)}` }>
                                    {item.name}
                                </ListGroup.Item>
                            </Link> 
                        ))
                    }
                </ListGroup>
                <Button className="chat-btn" onClick={addChat}>Добавить чат</Button>
            </section> 
}
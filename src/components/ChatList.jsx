import React, { useEffect } from 'react';
import { Button, ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { chatAdd } from '../store/chats/actions';


export default function ChatList(props){
    const chats = useSelector(state => state.chats);
    const dispatch = useDispatch();

    const addChat = (e) => {
        dispatch(chatAdd);
    }
   
    return <section className={`section-left ${props.sizeCol}`}>
                <ListGroup className='chat-list'>
                    {
                        Object.entries(chats).map(([key,item]) => (
                             <Link to={`/chat/${key}`}>
                                <ListGroup.Item className="chat-list__item">{item.name}</ListGroup.Item>
                            </Link> 
                        ))
                    }
                </ListGroup>
                <Button onClick={addChat}>Добавить чат</Button>
            </section> 
}
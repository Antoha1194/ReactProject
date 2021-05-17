import React from 'react';
import { ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ChatList extends React.Component{

    render(){
        return  <section className={`section-left ${this.props.sizeCol}`}>
                    <ListGroup className='chat-list'>
                        {this.props.chats.map(item =>  <Link to={`/chat/${item.id}`}>
                                                            <ListGroup.Item className="chat-list__item">{item.name}</ListGroup.Item>
                                                        </Link> )}
                    </ListGroup>
                </section> 
        
    } 
}
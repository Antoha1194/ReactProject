import React from 'react';
import { ListGroup} from 'react-bootstrap';

export default class ChatList extends React.Component{

    render(){
        return  <section className={`section-left ${this.props.sizeCol}`}>
                    <ListGroup className='chat-list'>
                        {this.props.chats.map(item =>  <ListGroup.Item className="chat-list__item">{item.name}</ListGroup.Item> )}
                    </ListGroup>
                </section> 
        
    } 
}
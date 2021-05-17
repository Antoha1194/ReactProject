import React from 'react';
import {Image} from 'react-bootstrap';
import img from '../image/ava.jpg';
export default class ChatList extends React.Component{
    
    render(){
        return  <div className="userbar">
                    <Image  className="userbar__img" src={img} roundedCircle />
                    <div className="userbar__info">
                        <p className="userbar__name">HUMAN</p>
                        <p className="userbar__status">Online</p>
                    </div>
                    
                </div>
            
                
        
    }
}
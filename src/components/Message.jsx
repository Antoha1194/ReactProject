import React from 'react';
import {AUTHOR} from '../const';


const printClassName = (item) => `message ${(item.author == AUTHOR.HUMAN)? 'message_pos-right': 'message_pos-left'}`

export default function Message(props){
console.log(props.message);
  return <span className={printClassName(props.message)}> 
            {props.message.author}: {props.message.text} 
          </span>
}


import React from 'react';
import {AUTHOR} from '../const';
export default class Message extends React.Component {

    printClassName = (item) => `message ${(item.author == AUTHOR.HUMAN)? 'message_pos-right': 'message_pos-left'}`
    

    render() {
      return this.props.message.map(item => <span className={this.printClassName(item)}>{item.author}: {item.message}</span>)
    }
  }
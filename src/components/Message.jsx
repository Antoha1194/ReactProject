import React from 'react';
import {AUTHOR} from '../const';
export default class Message extends React.Component {

    printClassName = (item) => `message ${(item?.author == AUTHOR.HUMAN)? 'message_pos-right': 'message_pos-left'}`
    

    render() {
      return <span className={this.printClassName(this.props.message)}>{this.props.message?.author}: {this.props.message.message}</span>
      
    }
  }
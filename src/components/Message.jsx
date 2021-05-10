import React from 'react';
export default class Message extends React.Component {

    constructor(props){
        super(props);

        //this.printClassName = this.printClassName.bind(this);
    }

    printClassName(item){
      return `message ${(item.author == 'HUMAN')? 'message_pos-right': 'message_pos-left'}`
    }

    render() {
      return this.props.message.map(item => {
        return <span className={this.printClassName(item)}>{item.author}: {item.message} </span>
    })
    }
  }
import React from 'react';
import Message from './Message.jsx';
import SendMessage from './SendMessage.jsx';
import {AUTHOR} from '../const';
export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            message: [
                {
                    author: AUTHOR.BOT,
                    message: 'Привет'
                },
                {
                    author: AUTHOR.BOT,
                    message: 'Как дела?'
                }
            ]
        };
    }

    componentDidUpdate(prevProps, prevState){
        let lastMessage = this.state.message[this.state.message.length - 1];
         if (lastMessage.author == AUTHOR.HUMAN) {
                console.log(lastMessage);
            setTimeout(() => {
                this.addMessage({author: AUTHOR.BOT, message: 'I am Bot'})
            }, 1000);   
             
        }

    }

    addMessage = (value) => this.setState({message: [...this.state.message, value]});  

    render() {
      return <div className={`message-field ${this.props.sizeCol}`}>
                <div className="messages">
                    <Message message={this.state.message}/>
                </div>
                <SendMessage addMessage={this.addMessage} />    
            </div>;
    }
  }
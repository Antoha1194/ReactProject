import React from 'react';
import Message from './Message.jsx';
import SendMessage from './SendMessage.jsx';
import {AUTHOR} from '../const';
export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            chats: {
                1:{
                    name: 'Chat #1',
                    messages: [1,2]
                },
                2:{
                    name: 'Chat #2',
                    messages: [2]
                },
                3:{
                    name: 'Chat #3',
                    messages:[]
                }
            },
            message: {
                1: {
                    author: AUTHOR.BOT,
                    message: 'Привет'
                },
                2: {
                    author: AUTHOR.BOT,
                    message: 'Как дела?'
                }
            }
        };
    }

    componentDidUpdate(prevProps, prevState){
        const {message, chats} = this.state;
        let lastMessage = message[Object.keys(message).length];
         if (lastMessage.author == AUTHOR.HUMAN) {
                console.log(lastMessage);
            setTimeout(() => {
                this.addMessage({author: AUTHOR.BOT, message: 'I am Bot'})
            }, 1000);   
             
        }

    }

    addMessage = (value) => {
        const { message, chats} = this.state;
        const newMessageId = Object.keys(this.state.message).length + 1;
        const messageActiveChat = this.state.chats[this.props.chatId].messages;

        this.setState({
            message: {
                    ...message,
                    [newMessageId]: {...value}
                },
            chats: {...chats, [this.props.chatId]: {messages: [...messageActiveChat, newMessageId] }}
            })
    };  

    render() {
    const { message, chats} = this.state;
      return <div className={`message-field ${this.props.sizeCol}`}>
                <div className="messages">
                    {chats[this.props.chatId].messages.map(item =>  <Message key={item} message={message[item]}/> )}
                    
                </div>
                <SendMessage addMessage={this.addMessage} />    
            </div>;
    }
  }
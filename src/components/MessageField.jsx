import React from 'react';
import Message from './Message.jsx';
import SendMessage from './SendMessage.jsx';
export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            message: [
                {
                    author: 'BOT',
                    message: 'Привет'
                },
                {
                    author: 'BOT',
                    message: 'Как дела?'
                }
            ]
        };

        this.addMessage = this.addMessage.bind(this);

        
    }
    componentDidUpdate(prevProps, prevState){
        let lastMessage = this.state.message[this.state.message.length - 1];
         if (lastMessage.author == 'HUMAN') {
                console.log(lastMessage);
            setTimeout(() => {
                this.addMessage({author: 'BOT', message: 'I am Bot'})
            }, 1000);   
             
        }

    }

    addMessage(value){
        this.setState({message: [...this.state.message, value]});  
    }

    render() {
      return <div className="message-field">
                <Message message={this.state.message}/>
                <SendMessage addMessage={this.addMessage} />
            </div>;
    }
  }
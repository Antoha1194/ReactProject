import React from 'react';
import MessageField from './MessageField.jsx'
import Header from './Header.jsx';
import ChatList from './ChatList.jsx';
export default class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            chats: [
                {
                    id: 1,
                    name: 'Chat #1'
                },
                {
                    id: 2,
                    name: 'Chat #2'
                },
                {
                    id: 3,
                    name: 'Chat #3'
                },
                {
                    id: 4,
                    name: 'Chat #4'
                }
            ]
        }
    }

    render() {
      return <main className="container">
                <div className="row">
                    <Header sizeCol="col-md-12"/>
                </div>
                <div className="row fulHeight">
                    <ChatList chats={this.state.chats} sizeCol="col-md-3"/>
                    <MessageField sizeCol="col-md-9"/>
                </div>
            </main>;
    }
  }
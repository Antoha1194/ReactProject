import React from 'react';

export default class ChatList extends React.Component{
    
    render(){
        return <header className={`header ${this.props.sizeCol}`}>Мой чат</header>;
                
        
    }
}
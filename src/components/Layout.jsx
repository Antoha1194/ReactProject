import React, { useEffect, useState } from 'react';
import MessageField from './MessageField.jsx'
import Header from './Header.jsx';
import ChatList from './ChatList.jsx';
import Profile from './Profile.jsx';


export default function Layout(props){
    
    return  <main className="container">
                <div className="row">
                    <Header sizeCol="col-md-12"/>
                </div>
                <div className="row fulHeight">
                    <ChatList sizeCol="col-md-3" chatId={props.match?.params.id}/>
                    {(props.showProfile)? <Profile sizeCol="col-md-9" />: <MessageField chatId={props.match.params.id} sizeCol="col-md-9"/>}
                
                </div>
            </main>;
}
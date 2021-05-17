import React from 'react';
import Userbar from './Userbar.jsx'
import { Link } from 'react-router-dom';
export default class ChatList extends React.Component{
    
    render(){
        return <header className={`header ${this.props.sizeCol}`}>
                    <Link to={`/profile`}>
                        <Userbar />
                    </Link>
                    
            </header>;
                
        
    }
}
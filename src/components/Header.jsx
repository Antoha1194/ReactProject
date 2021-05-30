import React from 'react';
import UserBar from './Userbar.jsx'
import { Link } from 'react-router-dom';
import PushToogle from './PushToogle.jsx';

export default function Header(props){
    return <header className={`header ${props.sizeCol}`}>
                <PushToogle/>
                <Link to={`/profile`}>
                    <UserBar />
                </Link>
            </header>
}
import React from 'react';
import UserBar from './Userbar.jsx'
import { Link } from 'react-router-dom';


export default function Header(props){
    return <header className={`header ${props.sizeCol}`}>
                <Link to={`/profile`}>
                    <UserBar />
                </Link>
            </header>
}
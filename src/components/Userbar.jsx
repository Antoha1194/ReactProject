import React from 'react';
import {Image} from 'react-bootstrap';
import img from '../image/ava.jpg';
import { useSelector } from 'react-redux';


export default function UserBar(){
    const profile = useSelector(store => store.profile);
    return <div className="userbar">
        <Image  className="userbar__img" src={profile.img} roundedCircle />
        <div className="userbar__info">
            <p className="userbar__name">{profile.name}</p>
            <p className="userbar__status">Online</p>
        </div>           
    </div>
}
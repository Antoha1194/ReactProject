import React, { useState } from 'react';
import { ListGroup, Image} from 'react-bootstrap';
import { AUTHOR } from '../const';
import img from '../image/ava.jpg';
import { useSelector } from 'react-redux';

export default function Profile(props){
    const profile = useSelector(store => store.profile)
    const {name, email, phone, img} = profile;
    return <div className={`profile ${props.sizeCol}`}>
                <h2 className='profile__h' >Профиль пользователя</h2>
                <Image className="profile__img" src={img} roundedCircle />
                <ListGroup className="profile__list">
                    <ListGroup.Item className="profile__item"><span>Имя: </span><span>{name}</span></ListGroup.Item>
                    <ListGroup.Item className="profile__item"><span>E-mail: </span><span>{email}</span></ListGroup.Item>
                    <ListGroup.Item className="profile__item"><span>Телефон: </span><span>{phone}</span></ListGroup.Item>
                </ListGroup>        
            </div>;
}
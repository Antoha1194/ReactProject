import React from 'react';
import { ListGroup, Image} from 'react-bootstrap';
import { AUTHOR } from '../const';
import img from '../image/ava.jpg';
export default class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            profile: {
                name: AUTHOR.HUMAN,
                email: 'mail@mail.ru',
                phone: '+79999999999',
                
            }
        }
    }
    
    render(){
        const {name, email, phone} = this.state.profile;
        return <div className={`profile ${this.props.sizeCol}`}>
                    <h2 className='profile__h' >Профиль пользователя</h2>
                    <Image className="profile__img" src={img} roundedCircle />
                    <ListGroup className="profile__list">
                        <ListGroup.Item className="profile__item"><span>Имя: </span><span>{name}</span></ListGroup.Item>
                        <ListGroup.Item className="profile__item"><span>E-mail: </span><span>{email}</span></ListGroup.Item>
                        <ListGroup.Item className="profile__item"><span>Телефон: </span><span>{phone}</span></ListGroup.Item>
                    </ListGroup>        
                </div>;
                
        
    }
}
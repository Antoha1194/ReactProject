import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../store/messages/actions';
import { chatAddMessage } from '../store/chats/actions';


export default function SendMessage(props){
    const messages = useSelector(store => store.messages);
    const profile = useSelector(store => store.profile);
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const hadlerMessage = (e) => {
        e.preventDefault();
        dispatch(addMessage(input, profile.name));
        props.addMessage(Object.keys(messages).length + 1);
        setInput('')
    }

    const updateState = (e) => setInput(e.target.value);

    return <Form className="form">
                <Form.Control type="text" className="form__inp" value={input} onChange={updateState} />
                <Button type="submit" disabled={(input == '')? 'disabled': false} className="form__sbm" onClick={hadlerMessage}>Отправить</Button>
            </Form>
}
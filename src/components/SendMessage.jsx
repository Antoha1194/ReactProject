import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addMessageWithThunk } from '../store/messages/actions';


export default function SendMessage(props){
    const [input, setInput] = useState('');

    const hadlerMessage = (e) => {
        e.preventDefault();
        props.addMessage(input);
        setInput('')
    }

    const updateState = (e) => setInput(e.target.value);

    return <Form className="form">
                <Form.Control type="text" className="form__inp" value={input} onChange={updateState} />
                <Button type="submit" disabled={(input == '')? 'disabled': false} className="form__sbm" onClick={hadlerMessage}>Отправить</Button>
            </Form>
}
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { AUTHOR } from '../const';
export default class SendMessage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            message: {
                author: AUTHOR.BOT, 
                message: ''
            }
        };

        
    }

    updateState = (e) => this.setState({message: {author: AUTHOR.HUMAN, message: e.target.value} });


    hadlerMessage = (e) => {
        e.preventDefault();
        let message = this.state.message;
        this.props.addMessage(message);
        this.setState({message: {author: AUTHOR.HUMAN, message: ''}})
    }

    render() {
      return <Form className="form">
                <Form.Control type="text" className="form__inp" value={this.state.message.message} onChange={this.updateState} />
                <Button type="submit" disabled={(this.state.message.message == '')? 'disabled': false} className="form__sbm" onClick={this.hadlerMessage}>Отправить</Button>
            </Form>
    }
  }
import React from 'react';
export default class SendMessage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            message: {
                author: 'HUMAN', 
                message: ''
            }
        };

        this.hadlerMessage = this.hadlerMessage.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    updateState(e){
        this.setState({message: {author: 'HUMAN', message: e.target.value} });
    }

    hadlerMessage(e){
        e.preventDefault();
        let message = this.state.message;
        this.props.addMessage(message);
        this.setState({message: {author: 'HUMAN', message: ''}})
    }

    render() {
      return <form className="form">
                <input type="text" className="form__inp" value={this.state.message.message} onChange={this.updateState} />
                <input type="submit" className="form__sbm" onClick={this.hadlerMessage} />
            </form>
    }
  }
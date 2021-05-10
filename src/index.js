import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );



// let messages = ['Привет', 'Как дела'];


// const MessageComponent = (prop) => <div>{prop.text}</div>;

// const MessageField = (props) => {
//    return props.messages.map(message => <MessageComponent text={ message } />);
// };

// const MessageBtn = () => {
//    return <button onClick={() => {messages.push('Нормально'); rend()}} >Отправить</button>
// }
// let rend = function() {
//    ReactDOM.render(
//       <div>
//          <MessageField messages={ messages } />
//          <MessageBtn />
//       </div>,
//       document.getElementById('root'),
//    );
// }
// rend();

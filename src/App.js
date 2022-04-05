import React, {useEffect, useState} from 'react';
import './App.scss';
import { AUTHOR } from './constants/common';
//import React, {useState} from "react";
//import Message from './components/Message';
//import Count from './components/Count';
//import Button from './components/Button';





function App() {
  const[messageList, setMessageList] = useState([]);
  const[value, setValue] = useState('');
  
  console.log('messageList---8---', messageList);

  const handleInput = (event) => {
    setValue(event.target.value);
  }
  
  const handleClick = () => {
    if (value !== ''){
      const newMessage = {text: value, author: AUTHOR.me };
      setMessageList([...messageList, newMessage]);
    }
  }

  useEffect(() => {
    let timerId;
    if (messageList.length > 0
       && messageList[messageList.length - 1].author !== AUTHOR.bot){
        timerId = setInterval(()=> {
          setMessageList([...messageList, newMessage]);
        }, 1500);
        const newMessage = {text: 'Привет друг! Как дела?', author: AUTHOR.bot };
        
    }
    return () => {
      if (timerId){
        clearInterval(timerId);
      }
    }
  }, [messageList])
  
  


  return (
    <div className="App">
      <header className="App-header">
        <h4>Список сообщений:</h4>
        <br/>
        
        {messageList.map(element =>(
           <div className="App-message">
             <p>{element.text}</p>
             <sup>{element.author}</sup>
           </div>
        ))} 

        <div >

          <input className="App-input"
           placeholder={'введите сообщенине'}
           value={value}
           onChange={handleInput} />

          <button className="App-btn" onClick={handleClick} >Add message</button>

        </div>
      
       </header>
     </div>
   );
 }

export default App;

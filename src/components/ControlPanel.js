import React, {useRef, useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';

//import React from 'react';
import {useParams} from 'react-router-dom';
import {AUTHOR} from '../constants/common';


const ControlPanel = ({addMessage}) => {

    let   {chatId}  = useParams();
    //const[messageList, setMessageList] = useState([]);
    const[value, setValue] = useState('');
    const inputRef = useRef(null);


    const handleInput = (event) => {
        setValue(event.target.value);
    };
  
    const handleClick = (e) => {
        e.preventDefault();
        if (value !== ''){
            const newMessage = {text: value, author: AUTHOR.me };
            addMessage(chatId,newMessage);
            //setMessageList([...messageList, newMessage]);
            setValue('');
            inputRef.current?.focus();
        }
    };

    useEffect(() => {
        inputRef.current?.focus();
        }, []);

    // useEffect(() => {
    //     let timerId;
    //     if (messageList.length > 0
    //         && messageList[messageList.length - 1].author !== AUTHOR.bot){
    //         timerId = setInterval(()=> {
    //         setMessageList([...messageList, newMessage]);
    //         }, 1500);
    //         const newMessage = {text: 'Привет друг! Как дела?', author: AUTHOR.bot };
    //     }
    //     return () => {
    //         if (timeId){
    //             cltarInterval(timeId);
    //         }
    //     }
    // }, [messageList] ); 

    
    return ( 
    <div>
        <div className={'controlPanel'}>

            <TextField
                inputRef={inputRef} 
                className="App-input"
                style={{ marginRight: '10px'}}
                placeholder={'введите сообщенине'}
                value={value}
                onChange={handleInput} />

            <Fab 
                onClick={handleClick} 
                color="primary" 
                aria-label="add">
                <SendIcon />
            </Fab>
        </div>
    </div>
    );
};
    
    
    export default ControlPanel;
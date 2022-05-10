import React, {useRef, useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import {useParams} from 'react-router-dom';
import {AUTHOR} from '../constants/common';
import {useDispatch, useSelector } from 'react-redux';
//import { addMessageWithSaga } from '../store/messages/actions';
import { addMessageWithThunk } from '../store/messages/actions';



const ControlPanel = () => {

    let { chatId }  = useParams();
    const[value, setValue] = useState('');
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const authorName = useSelector((state) => state.profile.name);
    // const allMessages = useSelector((state) => state.messages.messageList);
    
    // const messages = allMessages[chatId] || [];

    const handleInput = (event) => {
        setValue(event.target.value);
    };
  
    const handleClick = (e) => {
        e.preventDefault();
        if (value !== ''){
            const newMessage = {text: value, author: authorName };
            dispatch(addMessageWithThunk(chatId, newMessage));
            setValue('');
            inputRef.current?.focus();
        }
    };

    useEffect(() => {
        inputRef.current?.focus();
        }, []);

    
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
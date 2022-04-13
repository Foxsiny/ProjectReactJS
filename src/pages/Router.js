import { Routes, Route, Link } from 'react-router-dom';
import Chats from './Chats';
import Profile  from './Profile';
import Home  from './Home';
import {AUTHOR} from '../constants/common';
import { useState } from 'react';

const initialChats ={ 
    Id1: {
        name: 'Chat 1',
        messages:[
            {text: 'Message 1', author: AUTHOR.bot},
            {text: 'Hi', author: AUTHOR.me}
        ]
    },
    Id2: {
        name: 'Chat 2',
        messages:[{text: 'Message from chat 2', author: AUTHOR.me}]
    }
};

const Router = () => {
    const [chats, setChats] = useState(initialChats);

    const addMessage = (chatId, message) => {
        setChats({
            ...chats,
             [chatId]:{
                name: chats[chatId].name,
                messages: [...chats[chatId].messages, message]
            }
        });
    };


    return (<>

        <ul className={'menu'} >
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/chats">Chats</Link>
            </li>
        </ul>

        <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/chats">
                <Route index element={<Chats chats={chats}/> }/>
                <Route path=":chatId" element={<Chats chats={chats} addMessage={addMessage} />} />
            </Route>
            <Route path="*" element={<Chats chats={chats} />}/>
        </Routes>
    </>
    )};

export default Router;
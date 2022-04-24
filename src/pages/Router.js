import { Routes, Route, Link } from 'react-router-dom';
import Chats from './Chats';
import Profile  from './Profile';
import Home  from './Home';

//import { useState } from 'react';


const Router = () => {
    
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
                <Route index element={<Chats /> }/>
                <Route path=":chatId" element={<Chats />} />
            </Route>
            <Route path="*" element={<Chats />}/>
        </Routes>
    </>
    )};

export default Router;
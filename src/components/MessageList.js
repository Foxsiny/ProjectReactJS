import {useParams} from 'react-router-dom';
import {
    Avatar,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from '@mui/material';
import { AccountCircle, Android } from '@mui/icons-material';
import { AUTHOR } from '../constants/common';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMessagesByChatWithFB } from '../middlewares/middleware'

const MessageList = () => {
    
    const allMessages = useSelector((state) => state.messages.messageList);
    const { name } = useSelector((state) => state.profile);
    
    let   {chatId}  = useParams();

    const dispatch = useDispatch();
    console.log('mes',allMessages);

    //if (!allMessages[chatId]) return null;
    
    const messages = allMessages[chatId];

    const isAuthorBot = (author) => {
        return author === AUTHOR.bot;
    };

    useEffect(() => {
        dispatch(getMessagesByChatWithFB(chatId))
    }, [chatId]);

    console.log('mes',messages);
    
    return (
        <>
        <h1>Hello</h1>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {messages?.map((element, index) =>(
                    <div key={index} className="App-message">
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp">
                                    {isAuthorBot(element.author) ? (
                                        <Android/>
                                    ) : (<AccountCircle/>
                                    )}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={isAuthorBot(element.author) ? AUTHOR.bot : name}
                                secondary={
                                    <>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {element.text}
                                        </Typography>
                                    </>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>
                ))}
            
            </List>
        </>
    );
};
    
    export default MessageList;
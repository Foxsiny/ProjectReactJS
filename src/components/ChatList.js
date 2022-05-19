import {
    Avatar,
    Button,
    Dialog,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    //Paper,
    TextField
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
//import { addChat } from '../store/chats/actions';
import {
    addChatWithFB,
    deleteChatWithFB,
    initTrackerWithFB
} from '../middlewares/middleware';


const ChatList = () => {
    const chats = useSelector((state) => state.chats.chatList);
    const [visible, setVisible] = useState(false);
    const [chatName, setChatName] = useState('');
    const dispatch = useDispatch();
    const {chatId} = useParams();

    const handleChatName = (e) => {
        setChatName(e.target.value);
    };

    const handleClose = () => {
        setVisible(false);
    };

    const handleAdd = () => {
        setVisible(true);
    };

    const handleSave = () => {
        dispatch(addChatWithFB(chatName));
        setChatName('');
        handleClose();
    };

    const deleteChat = (id) => {
        dispatch(deleteChatWithFB(id));
    };

    useEffect(() => {
        dispatch(initTrackerWithFB());
    }, [chatId]);

    return (
        <div>
            <List>
                {chats?.length > 0 ? (
                    chats.map((chat) => (
                    <Link to={`/chats/${chat.id}`} key={chat.id}>
                        <ListItem
                            secondaryAction={
                                <IconButton 
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => deleteChat(chat.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            }>
                            <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary={chat.name}/>
                        </ListItem>
                    </Link>
                )) 
                ) : (
                    <div>Chats not found</div>
                )}
            </List>
            <Button onClick={handleAdd}> Add chat</Button>
            <Dialog open={visible} onClose={handleClose}>
                {/* <Paper style={{ padding: '10px'}}> */}
                    <DialogTitle>Please enter a name for a new chat</DialogTitle>
                    <TextField
                        placeholder="Chat name"
                        value={chatName}
                        onChange={handleChatName}
                        // fullWidth
                    />
                    {/* <br /> */}
                    {/* <br /> */}
                    <Button onClick={handleSave} /*variant="outlined"*/ >Save chat</Button>
                {/* </Paper> */}
            </Dialog>
        </div>
    );
};

export default ChatList;

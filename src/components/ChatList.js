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
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addChat } from '../store/chats/actions';


const ChatList = () => {
    const chats = useSelector((state) => state.chats.chatList);
    const [visible, setVisible] = useState(false);
    const [chatName, setChatName] = useState('');
    const dispatch = useDispatch();

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
        dispatch(addChat(chatName));
        setChatName('');
        handleClose();
    };

    return (
        <div>
            <List>
                {chats?.length > 0 ? (
                    chats.map((chat) => (
                    <Link to={`/chats/${chat.Id}`} key={chat.Id}>
                        <ListItem
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
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

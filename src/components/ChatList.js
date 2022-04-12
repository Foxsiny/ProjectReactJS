import {
    Typography,
    List,
    ListItem,
    IconButton,
    ListItemAvatar,
    Avatar,
    ListItemText
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom';
//import FolderIcon from '@mui/icons-material/Folder';

const ChatList = ({chats}) => {
    //let   {chatId}  = useParams();

    return <div>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Chat List
        </Typography>
        <List>
            {Object.keys(chats).map((chat, index) => (
                <Link to={`/chats/${chat}`} key={index}>
                    <ListItem
                        key={index}
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                        <Avatar>
                            {/* <FolderIcon /> */}
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={chats[chat].name}/>
                    </ListItem>
                </Link>
            ))}
        </List>
    </div>;
};

export default ChatList

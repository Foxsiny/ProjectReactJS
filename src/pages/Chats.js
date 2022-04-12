import MessageList from '../components/MessageList';
import ChatList from '../components/ChatList';
import ControlPanel from '../components/ControlPanel';



const Chats = ({chats, addMessage}) => {
   
    return (
        <div className="wrapper">
            <ChatList chats={chats}/>
            <MessageList chats={chats}/>
            <ControlPanel addMessage={addMessage} />
        </div>
    );
};
  




export default Chats;

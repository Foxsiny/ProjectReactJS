
import { ADD_MESSAGE } from "./actions"

const initialState = {
    messageList: {}
};


// {
//     chatId1: [{id, text, author}, {id, text, author}],
//     chatId2: [{id, text, author}, {id, text, author}, {id, text, author}]
// }
// type messageItem = {
//     id: string,
//     text: string,
//     author: string
// }
// type massageList = Record<[string], messageItem[]>
//     [string]: messageItem []
// }

const messagesReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:{
            const {chatId, message} = action.payload;
            const oldMessages = state.messageList[chatId] || [];
            return{
                ...state,
                messageList: {
                    ...state.messageList,
                    [chatId]: [
                        ...oldMessages,
                        {
                            ...message,
                            Id: `${chatId}${oldMessages.length}`
                        }
                    ]
                }
            };
        }
            
            

        default:
            return state;
    }
};

export default messagesReducer;
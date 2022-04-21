import { ADD_CHAT } from "./actions";

const initialState = {
    chatList: []
};

// const chatList = [
//     {
//         Id: 'string = Id + chat.length',
//         name: 'string'
//     }
// ]


const chatsReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_CHAT:
            return{
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        Id: `Id${state.chatList.length}`,
                        name: action.payload
                    }
                ]
            };
        default:
            return state;
    }
};

export default chatsReducer;
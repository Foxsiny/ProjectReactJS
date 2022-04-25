import { AUTHOR } from "../../constants/common";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';


export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: { chatId, message }
});

export const addMessageWithThunk =

 (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));

    // console.log(getState);

    if (message.author !== AUTHOR.bot) {
        const botMessage = {
            text: 'Привет друг! Я из тханка. Как дела?', 
            author: AUTHOR.bot
        };
        setTimeout(() => dispatch(addMessage(chatId, botMessage)), 1500);
    }
};
// console.log(addMessageWithThunk);
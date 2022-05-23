import {TOGGLE_NAME, UPDATE_NAME} from './actions';


const initialState = {
    showName: true,
    name: 'Natalia'
};


const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case TOGGLE_NAME:
            return  {
                ...state,
                showName: !state.showName
            };

            case UPDATE_NAME:
                //console.log();
                return {
                    ...state,
                    name: action.payload
                }


        default:
            return state;  
    }
};


export default profileReducer;
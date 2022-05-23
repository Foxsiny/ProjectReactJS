import {GET_GISTS_REQUEST} from '../gists/actions';
import {GET_GISTS_SUCCESS} from '../gists/actions';
import {GET_GISTS_FAILURE} from '../gists/actions';

export const STATUSES = {
    IDEL: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3
};

const initialState ={
    gists: [],
    request: STATUSES.IDEL,
    error: null,
    loading: false
};

const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST,
                loading: true
            };
        case GET_GISTS_SUCCESS:
            return {
                ...state,
                request: STATUSES.SUCCESS,
                gists: action.payload,
                loading: false
            };
        case GET_GISTS_FAILURE:
            return {
                ...state,
                request: STATUSES.FAILURE,
                error: action.payload,
                loading: false
            };  


        default:
            return state;
    }
};

export default gistsReducer;
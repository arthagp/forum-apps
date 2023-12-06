// authReducer.js

import { ActionType } from './action';

const authReducer = (state = { authUser: null, isAuthenticated: false }, action) => {
    switch (action.type) {
        case ActionType.SET_AUTH_USER:
            return {
                ...state,
                authUser: action.payload.authUser,
                isAuthenticated: true,
            };
        case ActionType.UNSET_AUTH_USER:
            return {
                ...state,
                authUser: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default authReducer;

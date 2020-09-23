import { LOGIN_SUCCEEDED, LOGOUT_SUCCEEDED } from "../actions/types";

export const authReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCEEDED:
            const { user } = payload;
            return { ...state, user };
        case LOGOUT_SUCCEEDED:
            return { ...state, user: null };
        default:
            return state;
    }
};

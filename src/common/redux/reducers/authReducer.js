import { LOG_IN, LOG_OUT } from "../actions/types";

export const authReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOG_IN:
            return { ...state, user: { email: payload.email, password: payload.password } };
        case LOG_OUT:
            return { ...state, user: null };
        default:
            return state;
    }
};

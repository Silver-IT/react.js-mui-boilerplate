import { TOKEN_VERIFY_SUCCEDED, LOGOUT_SUCCEEDED } from "../actions/types";

export const authReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case TOKEN_VERIFY_SUCCEDED:
            const { user } = payload;
            return { ...state, user };
        case LOGOUT_SUCCEEDED:
            return { ...state, user: null };
        default:
            return state;
    }
};

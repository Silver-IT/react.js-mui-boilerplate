import { LOGIN_REQUEST, LOGOUT_REQUEST } from './types';

export const login = (email, password) => ({
    type: LOGIN_REQUEST,
    payload: { email, password }
});

export const logout = () => ({
    type: LOGOUT_REQUEST
});

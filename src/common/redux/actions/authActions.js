import { LOG_IN, LOG_OUT } from './types';

export const login = (email, password) => ({
    type: LOG_IN,
    payload: { email, password }
});

export const logout = () => ({
    type: LOG_OUT
});

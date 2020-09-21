import { LOG_IN, LOG_OUT } from './types';

export const loginAction = (email, password) => ({
    type: LOG_IN,
    payload: { email, password }
});

export const logoutAction = () => ({
    type: LOG_OUT
});

import { put, call, takeEvery } from "redux-saga/effects";

import { AuthService, StorageService } from "../../services";
import {
    LOGIN_REQUEST, LOGIN_SUCCEEDED, LOGIN_FAILED,
    LOGOUT_REQUEST, LOGOUT_SUCCEEDED,
    TOKEN_VERIFY_REQUEST, TOKEN_VERIFY_SUCCEDED, TOKEN_VERIFY_FAILED
} from "../actions/types";
import { ACCESS_TOKEN_KEY } from "../../constants";

function* authorize(email, password) {
    try {
        const token = yield call(AuthService.login, email, password);
        return token;
    } catch (error) {
        yield put({ type: LOGIN_FAILED, error });
        yield call(logout);
    }
}

function* login(action) {
    const { email, password } = action.payload;
    const token = yield call(authorize, email, password)
    yield call(StorageService.saveItem, ACCESS_TOKEN_KEY, token);
    yield put({ type: TOKEN_VERIFY_REQUEST, payload: { replyForLogin: true } });
}

function* verifyJWT(action) {
    const { payload } = action;
    const token = StorageService.getItem(ACCESS_TOKEN_KEY);
    try {
        const user = yield call(AuthService.verifyJWT, token);
        yield put({ type: TOKEN_VERIFY_SUCCEDED, payload: { user } });
        if (payload && payload.replyForLogin ) {
            yield put({ type: LOGIN_SUCCEEDED });
        }
    } catch (error) {
        yield put({ type: TOKEN_VERIFY_FAILED, payload: { error } })
    }    
}

function* logout() {
    yield call(StorageService.removeItem, ACCESS_TOKEN_KEY);
    yield put({ type: LOGOUT_SUCCEEDED });
}

export default function*() {
    yield takeEvery(TOKEN_VERIFY_REQUEST, verifyJWT);
    yield takeEvery(LOGIN_REQUEST, login);
    yield takeEvery(LOGOUT_REQUEST, logout);
};

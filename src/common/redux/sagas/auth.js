import { put, call, takeEvery } from "redux-saga/effects";

import { AuthService, StorageService } from "../../services";
import {
    LOGIN_REQUEST, LOGIN_SUCCEEDED, LOGIN_FAILED,
    LOGOUT_REQUEST, LOGOUT_SUCCEEDED
} from "../actions/types";

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
    yield call(StorageService.saveItem, "access_token", token);
    const user  = yield call(AuthService.verifyJWT, token);
    yield put({ type: LOGIN_SUCCEEDED, payload: { user } });
}

function* logout() {
    yield call(StorageService.removeItem, "access_token");
    yield put({ type: LOGOUT_SUCCEEDED });
}

export default function*() {
    yield takeEvery(LOGIN_REQUEST, login);
    yield takeEvery(LOGOUT_REQUEST, logout);
};

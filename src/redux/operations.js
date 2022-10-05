// Код для операцій на Redux Toolkit + createAsyncThunk👇

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toastSuccessAdd, toastSuccessDelete, toastError } from "components/services/toasts";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/signup', credentials);
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        };
    }
);

export const logInUser = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/login', credentials);
            setAuthHeader(res.data.token);
            // console.log(res);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        };
    }
);

export const logOutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    };
});

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.contacts.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        };

        try {
            setAuthHeader(persistedToken);
            const res = await axios.get('/users/current');
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        };
    }
);

export const fetchContacts = createAsyncThunk("contacts/fetchContacts",
    async (_, thunkApi) => {
        try {
            const contacts = await axios.get('/contacts');
            return contacts.data;
        } catch (error) {
            toastError();
            return thunkApi.rejectWithValue(error);
        };
    }
);

export const addNewContact = createAsyncThunk("contacts/addNewContact",
    async ({ name, number }, thunkApi) => {
        try {
            const contacts = await axios.post('/contacts', { name, number });
            toastSuccessAdd();
            return contacts.data;
        } catch (error) {
            toastError();
            return thunkApi.rejectWithValue(error);
        };
    }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (id, thunkApi) => {
        try {
            const contacts = await axios.delete(`/contacts/${id}`);
            toastSuccessDelete();
            return contacts.data;
        } catch (error) {
            toastError();
            return thunkApi.rejectWithValue(error);
        };
    }
);

// Код для операцій на Redux Toolkit + createAction👇

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import {
//     fetchContactsRequest,
//     fetchContactsSuccess,
//     fetchContactsError,
//     addNewContactRequest,
//     addNewContactSuccess,
//     addNewContactError,
//     deleteContactRequest,
//     deleteContactSuccess,
//     deleteContactError,
// } from 'redux/actions';
// import { toastSuccessAdd, toastSuccessDelete, toastError } from "components/services/toasts";

// axios.defaults.baseURL = 'https://63330ab0a54a0e83d25eabab.mockapi.io';

// export const fetchContacts = () => async dispatch => {
//     dispatch(fetchContactsRequest());
//     try {
//         const contacts = await axios.get('/contacts');
//         dispatch(fetchContactsSuccess(contacts.data));
//     } catch (error) {
//         toastError();
//         fetchContactsError(error);
//     };
// };

// export const addNewContact = ({ name, number, id }) => async dispatch => {
//     dispatch(addNewContactRequest());
//     try {
//         const contacts = await axios.post('/contacts', { name, number, id });
//         toastSuccessAdd();
//         dispatch(addNewContactSuccess(contacts.data));
//     } catch (error) {
//         toastError();
//         addNewContactError(error);
//     };
// };

// export const deleteContact = id => async dispatch => {
//     dispatch(deleteContactRequest());
//     try {
//         const contacts = await axios.delete(`/contacts/${id}`);
//         toastSuccessDelete();
//         dispatch(deleteContactSuccess(contacts.data));
//     } catch (error) {
//         toastError();
//         deleteContactError(error);
//     };
// };
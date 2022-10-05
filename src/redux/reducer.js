// Код для редюсера на Redux Toolkit + createSlice + createAsyncThunk + builder👇

import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchContacts, addNewContact, deleteContact, registerUser, logInUser, logOutUser, refreshUser } from "./operations";

const handleFetchContacts = (state, action) => {
    state.items = action.payload;
};

const handleAddNewContact = (state, action) => {
    state.items.push(action.payload);
};

const handleDeleteContact = (state, action) => {
    const idx = state.items.findIndex(item => item.id === action.payload.id);
    state.items.splice(idx, 1);
};

const actions = [fetchContacts, addNewContact, deleteContact];

const phonebookSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        filter: '',
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                console.log(action);
            })
            .addCase(logInUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logOutUser.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isLoggedIn = true;
            })
            .addCase(fetchContacts.fulfilled, handleFetchContacts)
            .addCase(addNewContact.fulfilled, handleAddNewContact)
            .addCase(deleteContact.fulfilled, handleDeleteContact)
            .addMatcher(
                isAnyOf(...actions.map(action => action.fulfilled)),
                    state => {
                    state.isLoading = false;
                    state.error = null;
                }
            )
            .addMatcher(isAnyOf(...actions.map(action => action.pending)),
                state => {
                state.isLoading = true;
            })
            .addMatcher(
                isAnyOf(...actions.map(action => action.rejected)),
                    (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                }
            ),
    });

export const { setFilter } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['token'],
};

export const persistedReducer = persistReducer(persistConfig, phonebookReducer);

// Код для редюсера на Redux Toolkit + createSlice + createAsyncThunk👇

// import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts, addNewContact, deleteContact } from "./operations";

// const handleRequest = (state) => {
//     state.isLoading = true;
// };

// const handleSuccess = (state) => {
//     state.isLoading = false;
//     state.error = null;
// };

// const handleError = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
// };

// const phonebookSlice = createSlice({
//     name: "contacts",
//     initialState: {
//         items: [],
//         isLoading: false,
//         error: null,
//         filter: '',
//     },
//     reducers: {
//         setFilter(state, action) {
//             state.filter = action.payload;
//         },
//     },

//     extraReducers: {
//         [fetchContacts.pending](state) {
//             handleRequest(state);
//         },
//         [fetchContacts.fulfilled](state, action) {
//             state.items = action.payload;
//             handleSuccess(state, action);
//         },
//         [fetchContacts.rejected](state, action) {
//             handleError(state, action);
//         },
//         [addNewContact.pending](state) {
//             handleRequest(state);
//         },
//         [addNewContact.fulfilled](state, action) {
//             state.items.push(action.payload);
//             handleSuccess(state, action);
//         },
//         [addNewContact.rejected](state, action) {
//             handleError(state, action);
//         },
//         [deleteContact.pending](state) {
//             handleRequest(state);
//         },
//         [deleteContact.fulfilled](state, action) {
//             const idx = state.items.findIndex(item => item.id === action.payload);
//             state.items.splice(idx, 1);
//             handleSuccess(state, action);
//         },
//         [deleteContact.rejected](state, action) {
//             handleError(state, action);
//         },
//     },
// });

// export const { setFilter } = phonebookSlice.actions;
// export const phonebookReducer = phonebookSlice.reducer;



//                                  *************************                                       //



// Код для редюсера на Redux Toolkit + createSlice + createAction + операції👇

// import { createSlice } from "@reduxjs/toolkit";
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
// import { fetchContacts } from "./operations";

// const handleRequest = (state) => {
//     state.isLoading = true;
// };

// const handleSuccess = (state) => {
//     state.isLoading = false;
//     state.error = null;
// };

// const handleError = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
// };

// const phonebookSlice = createSlice({
//     name: "contacts",
//     initialState: {
//         items: [],
//         isLoading: false,
//         error: null,
//         filter: '',
//     },
//     reducers: {
//         setFilter(state, action) {
//             state.filter = action.payload;
//         },
//     },
//     extraReducers: {
//         [fetchContactsRequest](state) {
//             handleRequest(state);
//         },
//         [fetchContactsSuccess](state, action) {
//             state.items = action.payload;
//             handleSuccess(state, action);
//         },
//         [fetchContactsError](state, action) {
//             handleError(state, action);
//         },
//         [addNewContactRequest](state) {
//             handleRequest(state);
//         },
//         [addNewContactSuccess](state, action) {
//             state.items.push(action.payload);
//             handleSuccess(state, action);
//         },
//         [addNewContactError](state, action) {
//             handleError(state, action);
//         },
//         [deleteContactRequest](state) {
//             handleRequest(state);
//         },
//         [deleteContactSuccess](state, action) {
//             const idx = state.items.findIndex(item => item.id === action.payload);
//             state.items.splice(idx, 1);
//             handleSuccess(state, action);
//         },
//         [deleteContactError](state, action) {
//             handleError(state, action);
//         },
//     },
// });

// export const { addNewContact, deleteContact, setFilter } = phonebookSlice.actions;
// export const phonebookReducer = phonebookSlice.reducer;
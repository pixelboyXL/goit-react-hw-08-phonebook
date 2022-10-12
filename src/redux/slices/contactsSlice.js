import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addNewContact, deleteContact } from "../operations/contactsOperations";

const handleFetchContacts = (state, action) => {
    state.items = action.payload;
};

const handleAddNewContact = (state, action) => {
    state.items.push(action.payload);
};

const handleDeleteContact = (state, action) => {
    const idx = state.items.findIndex(item => item.id === action.meta.arg);
    state.items.splice(idx, 1);
};

const actions = [fetchContacts, addNewContact, deleteContact];

const phonebookContactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        filter: '',
    },
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
    extraReducers: builder =>
        builder
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

export const { setFilter } = phonebookContactsSlice.actions;
export const phonebookContactsReducer = phonebookContactsSlice.reducer;
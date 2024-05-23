import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOnAddItemPage: false
};

const globalSlice = createSlice({
    name: "global",
    initialState: initialState,
    reducers: {
        switchToAddItemPage(state) {
            state.isOnAddItemPage = true;
        },
        switchToHomePage(state) {
            state.isOnAddItemPage = false;
        }
    }
});

export const getIsOnAddItemPage = state => state.global.isOnAddItemPage;

export const {switchToAddItemPage, switchToHomePage} = globalSlice.actions;
export default globalSlice.reducer;
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: null,
    isLoading: false,
    isError: false
};

const dataSlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload;
            state.isLoading = false;
            state.isError = false;
        },
        fetchingData(state) {
            state.isLoading = true;
            state.isError = false;
        },
        fetchingError(state) {
            state.isLoading = false;
            state.isError = true;
        }
    }
});

export const isDataLoading = state => state.data.isLoading;
export const isErrorLoadingData = state => state.data.isError;
export const getData = state => state.data.data;
export const getResources = tagName => state => {

    if (tagName === 'resources') {
        return state.data.data;
    }

    return state.data.data.filter(resource => resource.tag === tagName)
};

export const {setData, fetchingData, fetchingError} = dataSlice.actions;

export function fetchData() {
    return async function (dispatch) {
        dispatch({type: "data/fetchingData"});

        const result = await fetch('https://media-content.ccbp.in/website/react-assignment/resources.json');

        if (result.status !== 200) {
            dispatch({type: "data/fetchingError"});
            return;
        }

        const data = await result.json();

        setTimeout(() => dispatch({type: "data/setData", payload: data}), 4000);
    }
}

export default dataSlice.reducer;
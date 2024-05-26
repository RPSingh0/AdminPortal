import {createSlice} from "@reduxjs/toolkit";
import {getResourceService} from "../../services/resourceService";

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
export const getResources = (tagName, searchText) => state => {

    if (tagName === 'resources') {
        return state.data.data.filter(resource => resource.title.toLowerCase().includes(searchText.toLowerCase()));
    }

    return state.data.data.filter(resource => {
        return (resource.tag === tagName) && (resource.title.toLowerCase().includes(searchText.toLowerCase()));
    });
};

export const {setData, fetchingData, fetchingError} = dataSlice.actions;

export function fetchData() {
    return async function (dispatch) {
        dispatch({type: "data/fetchingData"});

        const result = await getResourceService();

        if (result.status !== 200) {
            dispatch({type: "data/fetchingError"});
            return;
        }

        const data = await result.json();

        data.sort((a, b) => parseInt(a) - parseInt(b));

        dispatch({type: "data/setData", payload: data});
    }
}

export default dataSlice.reducer;
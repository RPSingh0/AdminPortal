import {configureStore} from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";
import dataReducer from "./components/home/dataSlice";

const store = configureStore({
    reducer: {
        global: globalReducer,
        data: dataReducer
    }
});

export default store;
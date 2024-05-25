import {configureStore} from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";
import dataReducer from "./components/home/dataSlice";
import authReducer from "./components/auth/authSlice";

const store = configureStore({
    reducer: {
        global: globalReducer,
        auth: authReducer,
        data: dataReducer
    }
});

export default store;
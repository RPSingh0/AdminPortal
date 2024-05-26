import {configureStore} from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";
import dataReducer from "./features/home/dataSlice";
import authReducer from "./features/auth/authSlice";

const store = configureStore({
    reducer: {
        global: globalReducer,
        auth: authReducer,
        data: dataReducer
    }
});

export default store;
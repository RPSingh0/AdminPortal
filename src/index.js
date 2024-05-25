import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from "./styles/GlobalStyles";
import {Provider} from "react-redux";
import store from "./store";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <GlobalStyles/>
        <App/>
        <ToastContainer theme="colored" position={"bottom-center"}/>
    </Provider>
);
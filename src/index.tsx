import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./application/store";
import "./index.css";
import "antd/dist/antd.css";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={Store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

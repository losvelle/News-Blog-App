import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {Provider} from "react-redux";
import store from "./App/store";

// get the Provider from react-redux pass the store and inside the provider element pass the App.
ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>,
                document.getElementById("root")
);

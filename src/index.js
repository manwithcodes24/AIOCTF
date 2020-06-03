
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from './App';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
// styles for this kit

// pages for this kit



ReactDOM.render(
	<Provider store={store}>
        <BrowserRouter>
          <div>
            <App/>
          </div>
        </BrowserRouter>
      </Provider>,
  document.getElementById("root")
);

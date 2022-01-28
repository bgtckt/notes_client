import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx'
// import { Provider } from "react-redux";
// import { store } from "./reducers";

ReactDom.render(
  <App/>,
  document.getElementById('root')
  // <Provider store={store}>
  //   <App/>
  // </Provider>,
  // document.getElementById('root')
);
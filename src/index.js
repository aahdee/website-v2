import React from "react";
import "./index.css";
import App from "./App";
import P5Sketch from "./p5/p5sketch";
import * as serviceWorker from "./serviceWorker";

import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <P5Sketch />
    <App />
  </React.StrictMode>
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

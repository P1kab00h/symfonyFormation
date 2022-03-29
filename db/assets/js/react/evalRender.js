import React from "react";
import ReactDOM from "react-dom";

/*import Hook from "./module/Hook";

import Calc from "./module/Calc";

import TodoList from "./module/TodoListReact";

import App from "./module/App";*/

import Bpm from "./module/Bpm";

import MeetPage from "./module/MeetPage";

ReactDOM.render(
    <React.StrictMode>
        <Bpm />

        <MeetPage />

    </React.StrictMode>,
    document.getElementById('app')
);
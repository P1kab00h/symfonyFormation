import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./module/TodoListReact";

ReactDOM.render(
    <React.StrictMode>
        <TodoList />
    </React.StrictMode>,
    document.getElementById('todoList')
);
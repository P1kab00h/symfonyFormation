//pour l'import par défaut on a React (default donc pas de {}), le {useState} lui est importé mais n'est pas en default
// pour rappel un seul peut être default
import React from "react";

import Hook from "./Hook";

import Calc from "./Calc";

import TodoList from "./TodoListReact";

export default function App() {
    return <>

        <Hook />

        <Calc />

        <TodoList />

    </>
}
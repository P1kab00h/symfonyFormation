//pour l'import par défaut on a React (default donc pas de {}), le {useState} lui est importé mais n'est pas en default
// pour rappel un seul peut être default
import React from "react";

// import Hook from "./Hook";
//
// import Calc from "./Calc";
//
// import TodoList from "./TodoListReact";
//
// import Dice from "./Dice";
//
// import Chifoumi from "./Chifoumi";

import AjaxSansRincer from "./AjaxSansRincer";

export default function App() {
    return <>
        <AjaxSansRincer />



    </>
    {/*return <>
        <AjaxSansRincer />
        <Hook />

        <Calc />

        <TodoList />

        <Dice />

        <Chifoumi />



    </>*/}
}
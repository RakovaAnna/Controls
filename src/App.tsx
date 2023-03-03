import React from "react";
import "./App.css";
import TaskFirst from "./components/TaskFirst";
import TaskSecond from "./components/TaskSecond";

function App() {
    return (
        <div className='main'>
            <TaskFirst />
            <TaskSecond />
        </div>
    )
}

export default App;

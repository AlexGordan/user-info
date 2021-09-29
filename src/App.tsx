import React from "react";
import "./App.scss";
import useRouter from "./router/router";

const App = () => {
    const router = useRouter();
    return <div className="App">{router}</div>;
};

export default App;

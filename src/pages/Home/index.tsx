import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";

const Home = () => {
    const history = useHistory();
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Hi friend.</h1>
                <br />
                <h2>Welcome to my project</h2>
                <br />
                <button onClick={() => history.push("/users")}>Go to Users</button>
            </div>
        </div>
    );
};

export default Home;

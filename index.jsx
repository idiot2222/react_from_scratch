import React from 'react';
import * as ReactDOM from "react-dom";



const reactDomContainer = document.getElementById("react-dom-container");

const App = () => {
    return (
        <>
            <h1>Haha!!</h1>
            <h3>You Babo!</h3>
        </>
    );
};

const rootComponent = App();

ReactDOM.render(rootComponent, reactDomContainer);
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/header.jsx";
import Body from './Component/Body.jsx';
import Brain from './Component/CustomHook.jsx';

function App(){
const cityData=Brain();
console.log("FULL DATA:", cityData);
    return(
        <>
        <Header/>
        <Body cityData={cityData}/>
        </>
    )
}

const root = document.getElementById("root");
const main = ReactDOM.createRoot(root);
main.render(<App/>);
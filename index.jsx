import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/header.jsx";


function App(){
    return(
        <>
        <Header/>
        </>
    )
}

const root = document.getElementById("root");
const main = ReactDOM.createRoot(root);
main.render(<App/>);
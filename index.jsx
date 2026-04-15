import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/header.jsx";
import Body from './Component/Body.jsx';
import Brain from './Component/CustomHook.jsx';
import HotelSelect from './Component/HotelSelection.jsx';
import { BrowserRouter , Route , Routes} from 'react-router';

function App(){
const {Data1, Data2}=Brain();

    return(
        <>
        <BrowserRouter>
        <Header/>

        <Routes>
            <Route path='/' element={<Body cityData={Data1}/>}></Route>
        </Routes>

        <Routes>
            <Route path="/rooms/:id" element={<HotelSelect roomData={Data2}/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

const root = document.getElementById("root");
const main = ReactDOM.createRoot(root);
main.render(<App/>);
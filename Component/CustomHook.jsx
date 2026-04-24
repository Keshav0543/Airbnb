import { useState, useEffect, useRef } from "react";
import Data1 from "./Data1.json";
import Data2 from "./Data2.json";


function Brain() {
    const [showAmen, setshowAmen] = useState(false);
    const modelref = useRef(null);
    useEffect(() => {
        function handleclick(event) {
            if (modelref.current && !modelref.current.contains(event.target)) {
                setshowAmen(false);
            }
        }

        if (showAmen) document.addEventListener("mousedown", handleclick);
        return () => {
            document.removeEventListener("mousedown", handleclick);
        };
    }, [showAmen])

    return { Data1, Data2, setshowAmen, showAmen, modelref };
}

export default Brain;
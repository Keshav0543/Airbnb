import { useState } from "react";


function CityDropDown(){
    const cities=["Mumbai","Pune","Patna","Goa","Chennai"];
    const [city,setcity]=useState("");
    const [show,setshow]=useState(false);

    const filterCity=cities.filter(cities=> cities.toLowerCase().includes(city.toLowerCase()));

    return(
        <div className="SelectCity">
        <input type="text" placeholder="Select City" value={city} onFocus={()=>setshow(true)}
        onChange={(e)=>setcity(e.target.value)}
        >
        </input>

        {show && (
            <div className="dropdown">
                {filterCity.map((c,index)=>
                    <div key={index} className="dropdown-item" onClick={()=>{
                        setcity(c);
                        setshow(false);
                    }}>{c}</div>
                )}
            </div>
        )}
        </div>
    )
}


export default CityDropDown;
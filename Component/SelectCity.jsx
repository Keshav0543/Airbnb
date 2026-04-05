import { useState, useEffect, useRef } from "react";
import { DateRange } from "react-date-range";

function CityDropDown() {
  const cities = ["Mumbai", "Pune", "Patna", "Goa", "Chennai"];

  const [city, setCity] = useState("");
  const [show, setShow] = useState(false);

  // ✅ FIX 1: array of object
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "keshav",
    },
  ]);

  const [showCallendar, setshowCallendar] = useState(false);

  const ref = useRef(null);
  const callendarRef = useRef(null);

  const filterCity = cities.filter(c =>
    c.toLowerCase().includes(city.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }

      if (
        callendarRef.current &&
        !callendarRef.current.contains(e.target)
      ) {
        setshowCallendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* CITY DROPDOWN */}
      <div className="SelectCity">
        <input
          type="text"
          placeholder="Select City"
          value={city}
          onFocus={() => setShow(true)}
          onChange={(e) => setCity(e.target.value)}
        />

        {show && filterCity.length > 0 && (
          <div className="dropdown" ref={ref}>
            {filterCity.map((c, index) => (
              <div
                key={index}
                className="dropdown-item"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setCity(c);
                  setShow(false);
                }}
              >
                {c}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* DATE RANGE */}
      <div className="DateRange" ref={callendarRef}>
        <button onClick={() => setshowCallendar(prev => !prev)}>
          {/* ✅ show selected date */}
          {date[0].startDate.toDateString()} {"-"} {date[0].endDate.toDateString()}
        </button>

        {showCallendar && (
          <div className="showcallendar">
            <DateRange
              ranges={date}
              onChange={(item) => setdate([item.keshav])}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default CityDropDown;
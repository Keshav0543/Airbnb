import { id } from "date-fns/locale";


function HotelSelect({ roomData }) {
    return (
        <>

            <div className="container-wrap">
                <div className="Room-info">
                    <div className="roomtitle">
                        <p>{roomData?.title}</p>
                    </div>


                    <div className="roombutton">
                        <button>share</button>
                        <button>save</button>
                    </div>
                </div>

                <div className="Image-club">
                    <div className="main-image">
                        <img src={roomData?.images[0]} alt="main" />
                    </div>

                    {roomData?.images.slice(1, 5).map((img, ind) => (
                        <div className="small-image" key={ind}>
                            <img src={img} alt="room" />
                        </div>
                    ))}
                </div>

                <div className="Roomcity">
                    <p>{roomData?.property_type}{" "}{roomData?.location}</p>
                </div>

                <div className="Room-info">
                    <p>{`${roomData?.capacity.max_guests} guests - ${roomData?.capacity.bedrooms} bedrooms - ${roomData?.capacity.beds} beds - ${roomData?.capacity.bathrooms} bathrooms`}</p>
                </div>
            </div>
        </>
    )
}

export default HotelSelect;
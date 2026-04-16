

function HotelSelect({ roomData }) {
    const istrue = roomData?.badge;

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

                {istrue && (
                    <div className="Roombadge">
                        <div className="sidebanner">

                            {/* LEFT */}
                            <div className="sidebanner-left">
                                <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/059619e1-1751-42dd-84e4-50881483571a.png?im_w=240" />
                                <p>Guest favourite</p>
                                <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/33b80859-e87e-4c86-841c-645c786ba4c1.png?im_w=240" />
                            </div>

                            {/* CENTER */}
                            <div className="sidebanner-center">
                                One of the most loved homes on Airbnb, according to guests
                            </div>

                            {/* RIGHT */}
                            <div className="sidebanner-right">

                                <div className="right-block">
                                    <div className="rating-num">{roomData?.rating}</div>
                                    <div className="stars">★★★★★</div>
                                </div>

                                <div className="right-block">
                                    <div className="reviews-num">{roomData?.review_count}</div>
                                    <div className="reviews-label">Reviews</div>
                                </div>

                            </div>

                        </div>
                    </div>
                )}

            </div>
        </>
    )
}

export default HotelSelect;
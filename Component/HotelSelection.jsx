function HotelSelect({ roomData, setshowAmen, showAmen , modelref}) {
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
                        <img src={roomData?.images?.[0]} alt="main" />
                    </div>

                    {roomData?.images?.slice(1, 5).map((img, ind) => (
                        <div className="small-image" key={ind}>
                            <img src={img} alt="room" />
                        </div>
                    ))}
                </div>

                <div className="Roomcity">
                    <p>{roomData?.property_type}{" "}{roomData?.location}</p>
                </div>

                <div className="Room-info">
                    <p>
                        {`${roomData?.capacity?.max_guests} guests - ${roomData?.capacity?.bedrooms} bedrooms - ${roomData?.capacity?.beds} beds - ${roomData?.capacity?.bathrooms} bathrooms`}
                    </p>
                </div>

                {istrue && (
                    <div className="Roombadge">
                        <div className="sidebanner">

                            <div className="sidebanner-left">
                                <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/059619e1-1751-42dd-84e4-50881483571a.png?im_w=240" />
                                <p>Guest favourite</p>
                                <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/33b80859-e87e-4c86-841c-645c786ba4c1.png?im_w=240" />
                            </div>

                            <div className="sidebanner-center">
                                One of the most loved homes on Airbnb, according to guests
                            </div>

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

                {!istrue && (
                    <div className="Room-rating">
                        <div className="Rating">{`✰ ${roomData?.rating}`}</div>
                        <div className="Reviews">
                            {`${roomData?.review_count} Reviews`}
                        </div>
                    </div>
                )}

                <div className="Host-wrap">
                    <div className="Host-content">
                        <img src={roomData?.host?.avatar_url}></img>
                    </div>

                    <div className="host-info">
                        <p id="changep">{`Hosted By ${roomData?.host?.name}`}</p>
                        <p>{`Hosting Since ${roomData?.host?.hosting_duration}`}</p>
                    </div>
                </div>

                <div className="Slant-line"></div>

                <div className="amenities">
                    <h2 className="amenities-title">What this place offers</h2>

                    <button onClick={() => setshowAmen(true)}>
                        Show all amenities
                    </button>

                    {showAmen && (
                        <div className="modal-overlay">
                            <div className="modal-box" ref={modelref}>

                                <div className="modal-header">
                                    <h2>What this place offers</h2>
                                    <button onClick={() => setshowAmen(false)}>✕</button>
                                </div>

                                <div className="modal-content">
                                    {Object.entries(roomData?.amenities || {}).map(([category, items]) => (
                                        <div key={category} className="modal-section">
                                            <h3>{category}</h3>

                                            {items.map((item) => (
                                                <p key={item.name}>{item.name}</p>
                                            ))}
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default HotelSelect;
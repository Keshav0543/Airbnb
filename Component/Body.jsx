function Body(props) {

    const citywise = props?.cityData?.cities;
    return (
        <>
            <div className="BodyDiv1">
                {citywise.map((city, index) =>
                    <div className="cardData" key={index}>
                        <p>{city.section_title}</p>

                        <div className="card-wrap">
                            {city.listings.map((item, i) =>
                                <div className="card" key={i}>
                                    <div className="image">
                                        <img src={item.image_url} alt="Property-img"></img>
                                        <div className="rating">
                                            <p>{item.rating}{"⭐"}</p>
                                        </div>
                                    </div>

                                    <div className="card-title">
                                        <p>{item.title}</p>
                                    </div>

                                    <div className="card-price">
                                        <p>{item.price}{" "}{item.price_qualifier}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                )}
            </div>
        </>
    )
}

export default Body;
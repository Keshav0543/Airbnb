function Body(props){

const citywise=props?.cityData?.cities;
    return(
        <>
        <div className="BodyDiv1">
           {citywise.map((city,index)=>
                <div className="cardData" key={index}>
                    <p>{city.section_title}</p>

                    {city.listings.map((item,i)=>
                        <div className="card" key={i}>
                            {item.title}
                            {item.price}
                        </div>
                        )}
                       
                    </div>
            )}
        </div>
        </>
    )
}

export default Body;
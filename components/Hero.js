import React from "react"

export default function Hero(props){
    return (
        <section>
            <img 
                src={`${props.imageUrl}`}
                alt="A picture of the place"
            />
            <div className="content-details">
                <div>
                    <i className="fa-solid fa-location-dot"></i>
                    <p>{props.location}</p>
                    <a href={`${props.googleMapsUrl}`}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <span>{props.startDate} - {props.endDate}</span>
                <p>{props.description}</p>
            </div>
        </section>
    )
}
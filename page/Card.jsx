export default function Card(props){
    return(
        <div className="whole">
            <img className="images" src={props.item.imageUrl} />
        <div className="cardContent">
        <div className="inline">
            <img className="placeholder" src="../Images/placeholder.png" />
            <h5 className="location">{props.item.location}</h5>
            <a className="google-maps" href={props.item.googleMapsUrl} target="_blank" >View on Google Maps</a>
        </div>
            <h2 className="place">{props.item.title}</h2>
            <h6 className="dates">{props.item.startDate} - {props.item.endDate}</h6>
            <p className="discription">{props.item.description}</p> </div>
        </div>
    )
}
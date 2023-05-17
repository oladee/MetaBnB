import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Cards(props){
    return(
        <div className="card-profile">
            <LazyLoadImage
            src={props.img}
            alt="" className="card--img"/>
            <div className="card-writeup1" style={{display:"flex",
            justifyContent:"space-between"}}>
                <p>{props.desert}</p>
                <p>{props.MBT}</p>
            </div>
            <div className="card-writeup2" style={{display:"flex",
            fontSize:"10px",
            justifyContent:"space-between"}}>
                <p>{props.km}</p>
                <p>{props.availability}</p>
            </div>
        </div>
    )
}
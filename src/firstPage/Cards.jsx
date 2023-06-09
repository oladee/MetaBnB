import { LazyLoadImage } from "react-lazy-load-image-component";
import star from "../assets/Group 59523.png"
export default function Cards(props) {
  let anume = [];
  for (var i = 0; i < props.stars; i++) {
    anume.push(<img src={star}/>);
  }
  return (
    <div className="card-profile">
      <LazyLoadImage src={props.img} alt="" className="card--img" />
      <div
        className="card-writeup1"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p>{props.desert}</p>
        <p>{props.MBT}</p>
      </div>
      <div
        className="card-writeup2"
        style={{
          display: "flex",
          fontSize: "5px",
          justifyContent: "space-between",
        }}
      >
        <p>{props.km}</p>
        <p>{props.availability}</p>
      </div>
      <div className="stars">{anume}</div>
    </div>
  );
}

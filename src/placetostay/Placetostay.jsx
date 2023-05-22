import { Link } from "react-router-dom";
import data from "../data";
import Cards from "../firstPage/Cards";
export default function Placetostay() {
  const carddetail = data.map((item) => {
    return (
      <>
        <Cards
          key={item.image}
          img={item.image}
          desert={item.desert}
          MBT={item.MBT}
          km={item.km}
          availability={item.availbility}
          stars={item.stars}
        />
      </>
    );
  });
  return (
    <>
      <div className="pstay-heading">
        <ul>
          <li>
            <Link to="">Restaurant</Link>
          </li>
          <li>
            <Link>Cottage</Link>
          </li>
          <li>
            <Link>Castle</Link>
          </li>
          <li>
            <Link>Fantasy City</Link>
          </li>
          <li>
            <Link>Beach</Link>
          </li>
          <li>
            <Link>Cabins</Link>
          </li>
          <li>
            <Link>Off-grid</Link>
          </li>
          <li>
            <Link>Farm</Link>
          </li>
          <li>
            <Link>Location</Link>
          </li>
        </ul>
      </div>
      <div className="card-list">{carddetail}</div>
      <div style={{
        paddingBottom:"3rem"
      }} className="card-list">{carddetail}</div>
    </>
  );
}

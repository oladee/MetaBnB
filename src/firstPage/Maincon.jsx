import Form from "./Form";
import mbtoken from "../assets/MBtoken.svg";
import metaMask from "../assets/Metamask.svg";
import openSea from "../assets/Opensea.svg";
import image3 from "../assets/image 3.png";
import image4 from "../assets/image 4.png";
import image5 from "../assets/image 5.png";
import image6 from "../assets/image 6.png";
import data from "../data"
import Cards from "./Cards"
import Nfts from "./Nfts";
import Footer from "./Footer";
export default function Maincon() {
  const carddetail = data.map(item => {
    return <Cards key={item.image} img={item.image} desert={item.desert} MBT={item.MBT}
    km={item.km} availability = {item.availbility}/>
  })
  return (
    <>
      <div className="mainContainer">
        <div className="rent">
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
            
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div>
            <Form />
          </div>
        </div>

        <div className="firstBatch">
          <img src={image4} alt="image4" className="image4" />
          <img src={image6} alt="image6" className="image6" />
        </div>
        <div className="secondBatch">
          <img src={image3} alt="image3" className="image3" />
          <img src={image5} alt="image5" className="image5" />
        </div>
      </div>
      <div className="wrapper">
        <img src={mbtoken} alt="" />
        <img src={metaMask} alt="" />
        <img src={openSea} alt="" />
      </div>
      <section className="inspiration">
        <h3 className="inspiration-text">
          Inspiration for your next adventure
          </h3>
        <div className="card-list">
        {carddetail}
        </div>
      </section>
      <Nfts/>
      <Footer/>
    </>
  );
}




import { Button } from "./navigation/Button"
import firstimg from "../assets/image 9.svg";
import secondimg from "../assets/image 7.svg";
import thirdimg from "../assets/image 8.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Nfts(){
    return(<>
        <section className="metaNFTs">
        <div className="nfts-wirteup">
            <h3>Metabnb NFTs</h3>
            <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <Button className="learn-more">Learn More</Button>
        </div>
        <div className="nfts-images">
            <LazyLoadImage
            src={firstimg} 
            alt="" className="first"
            />
            <LazyLoadImage src={secondimg} 
            alt="" className="second"/>
            <LazyLoadImage src={thirdimg} alt="" className="third"/>
        </div>
        </section>
    </>)
}
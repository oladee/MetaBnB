import metabnblogo from "../assets/Group.svg";
import instagram from "../assets/instagram-216-721958.png";
import facebook from "../assets/facebook-263-721950.png";
import twitter from "../assets/twitter-241-721979.png"
export default function Footer(){
    return(<>
    <footer>
        <div className="logo-section">
            <img src={metabnblogo} alt="Metabnb logo" />
            <div className="socialIcons">
                <img src={facebook} alt="facebook-icon" />
                <img src={instagram} alt="instagram-icon" />
                <img src={twitter} alt="twitter-icon" />
            </div>
            <div className="links1">
            <h5>Community</h5>
            <p>NFTs</p>
            <p>Tokens</p>
            </div>
        </div>
    </footer>
    </>)
}
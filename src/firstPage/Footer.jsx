import metabnblogo from "../assets/Group.svg";
import instagram from "../assets/instagram-216-721958.png";
import facebook from "../assets/facebook-263-721950.png";
import twitter from "../assets/twitter-241-721979.png";
import copyrightlogo from "../assets/ri_copyright-line.png"
export default function Footer() {
    let date = new Date();
    let year = date.getFullYear()
  return (
    <>
      <footer>
        <div className="logo-section">
          <img src={metabnblogo} alt="Metabnb logo" />
          <div className="socialIcons">
            <img src={facebook} alt="facebook-icon" />
            <img src={instagram} alt="instagram-icon" />
            <img src={twitter} alt="twitter-icon" />
          </div>
          <div className="footer-links">
            <div className="links1">
              <h5>Community</h5>
              <p>NFTs</p>
              <p>Tokens</p>
              <p>Landlords</p>
              <p>Discord</p>
            </div>
            <div className="links2">
                <h5>Places</h5>
                <p>Castle</p>
                <p>Farms</p>
                <p>Beach</p>
                <p>Learn More</p>
            </div>
            <div className="links3">
                <h5>About Us</h5>
                <p>Road map</p>
                <p>Creators</p>
                <p>Career</p>
                <p>Contact us</p>
            </div>
          </div>
        </div>
        <div className="copyrights">
            <span><img src={copyrightlogo} alt="" /> {year}</span>
        </div>
      </footer>
    </>
  );
}

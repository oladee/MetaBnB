import logo from "../assets/Vector.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Hamburger from "hamburger-react";
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="logoIcon">
          <img className="logo" src={logo} alt="meta logo" />
          <h1 className="text">Metabnb</h1>
        </div>
        <div className="sub">
          <div className="aside">
            <Sidemenu />
          </div>

          <div className="list">
            <div className="links">
                <Link to="/Home">Home</Link>

                <Link to="/place-to-stay">Place to stay</Link>

                <Link to="/NFT">NFTs</Link>

                <Link to="/community">Community</Link>
            </div>
            
          </div>
          
        </div>
        <div className="button">
                <button className="DWallet">Connect to Wallet</button>
        </div>
      </nav>
    </>
  );
}
export function Sidemenu() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} className="burger" />
      <Side display={isOpen} />
    </>
  );
}
export function Side({ display }) {
  return (
    <>
      {display && (
        <aside id="sideMenu">
          <div className="flexible">
            <div className="linkes">
                  <button className="cWallet">Connect to Wallet</button>                <Link to="/Home">Home</Link>
                  <Link to="/place to stay">Place to stay</Link>
                  <Link to="">NFTs</Link>
                  <Link to="">Community</Link>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}

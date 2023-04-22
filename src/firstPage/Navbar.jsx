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
                <Sidemenu/>
            </div>
       
          <div className="list">
                <div className="links">
                  <ul>
                  <li>
                      <Link to="/place-to-stay">Place to stay</Link>
                  </li>
                  <li>
                      <Link to="/NFTs">NFTs</Link>
                  </li>
                  <li>
                      <Link to="/trending">Trending</Link>
                  </li>
                  <li>
                      <Link to="/community">Community</Link>
                  </li>
                  </ul>
                  <div>
                    <button>Connect to Wallet</button>
                  </div>
                </div> 
          </div>
        </div>
      </nav>
    </>
  );
}
export function Sidemenu() {
    const [isOpen, setOpen] = useState(false)
  return (
    
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <Side display={isOpen}/>
    </>
  );
}
export function Side({display}){
    return (<>
                {display && ( <aside id="sideMenu">
          <div className="flexible">
            <div>
            </div>
            <div className="links">
              <ul>
                <li>
                  <button className="cWallet">Connect to Wallet</button>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Place to stay</a>
                </li>
                <li>
                  <a href="">NFTs</a>
                </li>
                <li>
                  <a href="">Community</a>
                </li>
              </ul>
            </div>
          </div>
        </aside>)}
    </>)
}


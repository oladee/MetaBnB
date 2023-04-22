import logo from "../assets/Vector.svg";
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
                <ul>
                <li>
                    <button></button>
                </li>
                <li>
                    <a href="">Place to stay</a>
                </li>
                <li>
                    <a href="">NFTs</a>
                </li>
                <li>
                    <a href="">Trending</a>
                </li>
                <li>
                    <a href="">Categories</a>
                </li>
                </ul>
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


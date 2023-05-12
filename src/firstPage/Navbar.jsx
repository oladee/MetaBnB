import logo from "../assets/Vector.svg";
import closeMenu from "../assets/icon-menu-close.svg";
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
            <div className="button">
              <PopUp butClassName="cWallet" />
            </div>
          </div>
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
              <PopUp butClassName="cWallet" />
              <Link to="/Home">Home</Link>
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
export function PopUp({ butClassName}) {
  const [popUp, setPopUp] = useState(false);

  function handleClick() {
    setPopUp(!popUp);
  }
  return (
    <>
      <Button className={butClassName} handleClick={handleClick}>
        Connect a Wallet
      </Button>
      {popUp && (
        <>
          <div className="modal" onClick={handleClick}>
            <div className="containModal">
              <div>
                <h3>Connect Wallet</h3>
                <img src={closeMenu}alt="" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export function Button({ handleClick, children, className }) {
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}

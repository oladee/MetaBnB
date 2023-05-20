import logo from "../../assets/Vector.svg";
import closeMenu from "../../assets/icon-menu-close.svg";
import { Button } from "./Button";
import metamask from "../../assets/metamasklogo.png";
import walletConnect from "../../assets/walletConnect.png";
import sideArrow from "../../assets/sideArrow.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
              <PopUp butClassName="DWallet" />
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
  useEffect(() => {
    const handleFalse = () => setPopUp(false)
    if(popUp){
      window.addEventListener('blur', handleFalse)
    }else{
      window.removeEventListener('blur', handleFalse)
    }
    return window.removeEventListener('blur', handleFalse)
  },[popUp, setPopUp])
  return (
    <>
      <Button className={butClassName} handleClick={handleClick}>
        Connect Wallet
      </Button>
      {popUp && (
        <>
          <div className="modal" id="modal">
            <div className="containModal" >
              <div className="modalHead" >
                <h3>Connect Wallet</h3>
                <img src={closeMenu}alt="close-icon" className="iconClose" onClick={handleClick}/>
              </div>
              <hr />
              <div className="modalBody">
                <p>Choose your preferred wallet: </p>
                <div className="wallets">
                  <div className=" wallet wallet1">
                    <img src={metamask} alt="metamask-logo"/>
                    <div className="writing">
                      <h5>Metamask</h5>
                      <img src={sideArrow} alt="side-arrow"/>
                    </div>
                  </div>
                  <div className=" wallet wallet2">
                    <img src={walletConnect} alt="walletconnect-logo"/>
                    <div className="writing">
                      <h5>WalletConnect</h5>
                      <img src={sideArrow} alt="side-arrow"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}


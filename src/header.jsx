import Weblogo from "./logo.png";
function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img className="logo-img" alt="this is the logo" src={Weblogo}></img>
        </div>
        <div className="menu">
          <p className="header-p">unlimted tv shows & movies</p>
          <button className="btn join-now">Join now</button>
          <button className="btn Sign-in">Sign In</button>
        </div>
      </header>
    </>
  );
}
export default Header;

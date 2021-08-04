import logo from "../assets/TCLogoOnly.png";

function Navbar() {
  return (
    <nav className="h-10vh navbar p-0 navbar-light bg-light shadow-lg">
      <div className="container-fluid h-100 p-0 d-flex justify-content-center">
        <span className="navbar-brand m-0 p-0 h1">
          <img src={logo} className="h-10vh" alt="TrueCoders" />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;

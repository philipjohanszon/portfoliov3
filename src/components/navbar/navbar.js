import "./navbar.scoped.css";

const Navbar = () => (
  <nav>
    <div className="container">
      <a className="brand" href="#top">
        Philip Johansson
      </a>
      <div className="linksContainer">
        <a className="link" href="#about">
          about
        </a>
        <a className="link" href="#projects">
          projects
        </a>
        <a className="link" href="#contact">
          contact
        </a>
      </div>
    </div>
  </nav>
);
export default Navbar;


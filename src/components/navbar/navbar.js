import "./navbar.scoped.css"

const Navbar = () => (
    <nav>
      <div className="container">
        <a className="brand" >Philip Johansson</a>
        <div className="linksContainer">
          <a className="link">about</a>
          <a className="link">projects</a>
          <a className="link">contact</a>
        </div>
      </div>
    </nav >
)
export default Navbar;
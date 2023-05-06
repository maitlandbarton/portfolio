import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <section>
        <Link to="/"> mattie </Link>
        <nav>
          <Link to="/aboutme">about me</Link>
          <Link to="/projects"> projects </Link>
          <Link to="/contact"> contact </Link>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;

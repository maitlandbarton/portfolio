import { Link } from "react-router-dom";

function MobileMenu() {
  return (
    <section
      id="mobile-menu"
      className="block m-0 sm:flex md:hidden pb-5 justify-center items-center shadow-lg sm:shadow-none text-lg"
    >
      <nav
        className="flex flex-col items-center"
        aria-label="mobile"
      >
        <Link to="/" className="w-full text-center hover:text-customBlue">
          Home
        </Link>
        <Link to="/aboutme" className="w-full text-center my-1 hover:text-customBlue">
          About Me
        </Link>
        <Link to="/projects" className="w-full text-center hover:text-customBlue">
          Projects
        </Link>
      </nav>
    </section>
  );
}

export default MobileMenu;
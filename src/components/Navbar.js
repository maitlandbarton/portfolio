import { Link } from "react-router-dom";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  return (
    <header className="sticky top-0 z-10 bg-gradient-to-b from-customBlue to-transparent mx-auto max-w-screen">
      <section className="mx-auto flex max-w-screen items-center justify-around p-4">
        <Link className="text-2xl hover:text-indigo font-semibold" to="/">
          mattie
        </Link>

        <div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
              >
                {showMenu ? (
                  <XMarkIcon className="text-3xl" />
                ) : (
                  <Bars3Icon className="text-3xl" />
                )}
              </svg>
            </button>
          </div>

          <nav className="hidden md:block space-x-8 text-xl">
            <Link className="hover:text-indigo" to="/aboutme">
              about me
            </Link>
            <Link className="hover:text-indigo" to="/projects">
              projects
            </Link>
          </nav>
        </div>
      </section>
      { showMenu && (
        <MobileMenu/>
      )}
    </header>
  );
};

export default Navbar;

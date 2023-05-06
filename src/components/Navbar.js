import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-gradient-to-b from-customBlue to-transparent mx-auto max-w-screen">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
      <Link className="text-2xl hover:text-indigo font-semibold" to="/"> mattie </Link>
        <nav className="hidden space-x-8 md:block text-xl">
            <Link className="hover:text-indigo" to="/aboutme">
                about me
            </Link>
            <Link className="hover:text-indigo" to="/projects"> projects </Link>
            <Link className="hover:text-indigo" to="/contact"> contact </Link>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;

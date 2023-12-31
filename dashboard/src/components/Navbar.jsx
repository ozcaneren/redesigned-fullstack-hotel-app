import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-zinc-800">
      <div className="h-14 flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <div className="flex items-center">
            <span className="self-center text-gray-200 text-2xl font-semibold whitespace-nowrap">
              Admin Panel
            </span>
          </div>
        </Link>
        <div className="block" id="navbar-default">
          <ul className="font-medium flex flex-col md:p-0 rounded-lg md:flex-row md:space-x-8 md:border-0">
            <li>
              <a
                href="#"
                className="block rounded bg-transparent font-medium text-lg text-gray-200"
              >
                Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

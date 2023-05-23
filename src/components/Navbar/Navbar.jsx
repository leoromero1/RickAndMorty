import { Link } from "react-router-dom";
import logo from "../../components/assets/rym.svg";
export const Navbar = () => {
  return (
    <header className="w-screen bg-gray-900">
      <nav className="dark:bg-gray-800">
        <div className="flex justify-center pb-3">
          <img src={logo} alt="logo de rick and morty" className="bg-auto" />
        </div>
        <div className="flex items-center justify-center mx-auto text-white capitalize dark:text-gray-300 py-4">
          <div>
            <Link
              to="/"
              className="border-b-2 border-transparent transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              Home
            </Link>
          </div>

          <Link
            to="/personajes"
            className="border-b-2 border-transparent transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Personajes
          </Link>

          <Link
            to="/favorite"
            className="border-b-2 border-transparent transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Favoritos
          </Link>

          <Link
            to="/about"
            className="border-b-2 border-transparent transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};

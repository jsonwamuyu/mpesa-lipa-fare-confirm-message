import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="wrapper bg-[#191919]">
      <div className="container">
        <div className=""></div>
        <div className="">
          <ul className="flex flex-row gap-8 text-white items-center">
            <Link to="/" className="text-slate-300 hover:text-blue-700">
              Home
            </Link>
            <Link to="/books" className="text-slate-300 hover:text-blue-700">
              Books
            </Link>
            <Link to="/login" className="text-slate-300 hover:text-blue-700">
              Login
            </Link>
            <Link to="/signup" className="text-slate-300 hover:text-blue-700">
              Sign Up
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

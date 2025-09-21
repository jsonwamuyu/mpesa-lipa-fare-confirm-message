import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="wrapper">
      <div className="container items-center juctify-center flex flex-col">
        <div className="text-center">
          <h1 className="font-bold text-4xl">
            <span className="text-blue-800 text-5xl">GraphQl</span> Master
          </h1>
          <p className="text-slate-400">Master GraphQL with a Book App.</p>
        </div>

        <div className="max-w-sm flex gap-4 my-8">
          <Link to="/login" className="text-white">
            <button className="">Login</button>
          </Link>
          <Link to="/signup" className="text-white">
            <button>Create account</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

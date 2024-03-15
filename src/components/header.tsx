import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-400 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
        <Link to="/">
          <h1 className="font-bold text-xl sm:text-2xl flex flex-wrap">
            <span className="text-white">Robo</span>
            <span className="text-gray-200">Cop</span>
          </h1>
        </Link>
        <ul className="flex gap-12">
          <Link to="/home">
            <li className="hidden sm:inline text-xl text-white hover:underline">
              Home
            </li>
          </Link>
          <Link to="/alerts">
            <li className=" hidden sm:inline text-xl text-white hover:underline">
              Alert
            </li>
          </Link>
          <Link to="/history">
            <li className=" hidden sm:inline text-xl text-white hover:underline">
              History
            </li>
          </Link>

          <Link to="/signin">
            <li className="text-white  text-xl hover:underline">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

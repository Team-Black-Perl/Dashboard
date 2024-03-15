import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Robo</span>
            <span className="text-slate-700">Cop</span>
          </h1>
        </Link>
        <ul className="flex gap-12">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/alerts">
            <li className=" hidden sm:inline text-slate-700 hover:underline">
              Alert
            </li>
          </Link>
          <Link to="/history">
            <li className=" hidden sm:inline text-slate-700 hover:underline">
              History
            </li>
          </Link>

          <Link to="/login">
            <li className="text-slate-700 hover:underline">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
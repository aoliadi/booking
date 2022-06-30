import { Link } from "react-router-dom";
import nav from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={nav.container}>
      <ul className={nav.list_container}>
        <li className={nav.fullwidth}>
          <Link to="/" className="">
            lamabooking
          </Link>
          <span className="logo logo--nav"></span>
        </li>
        <li className="">
          <button className={nav.btn}>register</button>
        </li>
        <li className="">
          <button className={nav.btn}>login</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

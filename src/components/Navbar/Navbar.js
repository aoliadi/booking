import nav from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={nav.container}>
      <ul className={nav.list_container}>
        <li className="">
          <span className="logo logo--nav">lamabooking</span>
        </li>
        <li className="">
          <button className="">register</button>
        </li>
        <li className="">
          <button className="">login</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

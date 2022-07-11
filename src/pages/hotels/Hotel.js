import hotels from "./hotels.module.css";

import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Main from "../../components/MainHotels/MainHotels";
import Aside from "../../components/AsideHotels/AsideHotels";

const Hotel = () => {
  return (
    <div className="">
      <Navbar />
      <Header type="hotels" />
      <div className={hotels.flex}>
        <Aside />
        <Main />
      </div>
    </div>
  );
};

export default Hotel;

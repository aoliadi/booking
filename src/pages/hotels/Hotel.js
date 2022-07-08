import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import MainHotels from "../../components/MainHotels/MainHotels";

const Hotel = () => {
  return (
    <div className="">
      <Navbar />
      <Header type="hotels" />
      <MainHotels />
    </div>
  );
};

export default Hotel;

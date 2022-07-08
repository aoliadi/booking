import AsideHome from "../../components/AsideHome/AsideHome";
import Header from "../../components/Header/Header";
import MainHome from "../../components/MainHome/MainHome";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <MainHome />
      <AsideHome />
    </div>
  );
};

export default Home;

import Aside from "../../components/AsideHome/AsideHome";
import Header from "../../components/Header/Header";
import Main from "../../components/MainHome/MainHome";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Main />
      <Aside />
    </div>
  );
};

export default Home;

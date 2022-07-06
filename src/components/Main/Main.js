import main from "./main.module.css";
import Featured from "../Featured/Featured";
import PropertyList from "../Properties/PropertyList";
import FeaturedProps from "../FeaturedProps/FeaturedProps";

function Main() {
  return (
    <main className={main.container}>
      <Featured />
      <PropertyList />
      {/* <h1>a</h1> */}
      <FeaturedProps />
    </main>
  );
}

export default Main;

import main from "./main.module.css";
import Featured from "../Featured/Featured";
import PropertyList from "../Properties/PropertyList";
import FeaturedProps from "../FeaturedProps/FeaturedProps";

function Main() {
  return (
    <div className="">
      <main className={main.container}>
        <Featured />
        <PropertyList />
        <FeaturedProps />
      </main>
    </div>
  );
}

export default Main;

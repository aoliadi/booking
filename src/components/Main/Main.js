import main from "./main.module.css";
import Featured from "../Featured/Featured";
import PropertyList from "../Properties/PropertyList";

function Main() {
  return (
    <main className={main.container}>
      <Featured />
      <PropertyList />
      {/* <h1>a</h1> */}
      {/* <Featured /> */}
    </main>
  );
}

export default Main;

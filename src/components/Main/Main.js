import main from "./main.module.css";
import Featured from "../Featured/Featured";

function Main() {
  return (
    <main className={main.container}>
      <Featured />
      {/* <Featured /> */}
    </main>
  );
}

export default Main;

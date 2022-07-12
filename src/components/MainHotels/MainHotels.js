import SearchItem from "../SearchItem/SearchItem";
import main from "./mainhotels.module.css";

function MainHotels() {
  return (
    <main className={main.container}>
      <>
        <SearchItem />
        <SearchItem />
      </>
    </main>
  );
}

export default MainHotels;

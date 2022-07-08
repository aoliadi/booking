import MailList from "../MailList/MailList";
import aside from "./asidehome.module.css";

function AsideHome() {
  return (
    <aside className={aside.container}>
      <MailList />
    </aside>
  );
}

export default AsideHome;

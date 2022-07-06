import MailList from "../MailList/MailList";
import aside from "./aside.module.css";

function Aside() {
  return (
    <aside className={aside.container}>
      <MailList />
    </aside>
  );
}

export default Aside;

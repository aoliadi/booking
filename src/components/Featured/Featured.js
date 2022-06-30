import featured from "./featured.module.css";

function Featured() {
  return (
    <section className={featured.container}>
      <ul className={featured.list__container}>
        <li className={featured.list__item}>
          <img src="" alt="" className={featured.list__img} />
          <div className={featured.list__label}>
            <h1 className={featured.list__title}>Dublin</h1>
            <h2 className={featured.list__desc}>123 properties</h2>
          </div>
        </li>
        <li className={featured.list__item}>one box</li>
        <li className={featured.list__item}>one box</li>
        <li className={featured.list__item}>one box</li>
      </ul>
      <div className=""></div>
    </section>
  );
}

export default Featured;
